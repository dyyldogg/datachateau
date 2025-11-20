import React, { useMemo } from "react";

// CONTROL ANIMATION SPEED HERE
// Higher number = Slower animation
// 1.0 = Original speed
// 2.0 = Half speed
const SPEED_FACTOR = 2.5;

// Simple seeded random for deterministic renders
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate a rough path for a circle
function getRoughCirclePath(
  cx: number,
  cy: number,
  r: number,
  seed: number
): string {
  const k = 0.5522847498;
  const noise = (s: number) => (seededRandom(s) - 0.5) * 12;

  const p0x = cx + r + noise(seed + 1);
  const p0y = cy + noise(seed + 2);

  const c01x = cx + r + noise(seed + 3);
  const c01y = cy + k * r + noise(seed + 4);
  const c10x = cx + k * r + noise(seed + 5);
  const c10y = cy + r + noise(seed + 6);

  const p1x = cx + noise(seed + 7);
  const p1y = cy + r + noise(seed + 8);

  const c12x = cx - k * r + noise(seed + 9);
  const c12y = cy + r + noise(seed + 10);
  const c21x = cx - r + noise(seed + 11);
  const c21y = cy + k * r + noise(seed + 12);

  const p2x = cx - r + noise(seed + 13);
  const p2y = cy + noise(seed + 14);

  const c23x = cx - r + noise(seed + 15);
  const c23y = cy - k * r + noise(seed + 16);
  const c32x = cx - k * r + noise(seed + 17);
  const c32y = cy - r + noise(seed + 18);

  const p3x = cx + noise(seed + 19);
  const p3y = cy - r + noise(seed + 20);

  const c30x = cx + k * r + noise(seed + 21);
  const c30y = cy - r + noise(seed + 22);
  const c03x = cx + r + noise(seed + 23);
  const c03y = cy - k * r + noise(seed + 24);

  return `M ${p0x},${p0y} C ${c01x},${c01y} ${c10x},${c10y} ${p1x},${p1y} C ${c12x},${c12y} ${c21x},${c21y} ${p2x},${p2y} C ${c23x},${c23y} ${c32x},${c32y} ${p3x},${p3y} C ${c30x},${c30y} ${c03x},${c03y} ${p0x},${p0y}`;
}

// Generate a rough path for an ellipse (approximated)
function getRoughEllipsePath(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  angleDeg: number,
  seed: number
): string {
  const k = 0.5522847498;
  const noise = (s: number) => (seededRandom(s) - 0.5) * 10;

  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const rot = (x: number, y: number) => ({
    x: x * cos - y * sin,
    y: x * sin + y * cos,
  });

  const pts = [
    { x: rx, y: 0 },
    { x: rx, y: k * ry },
    { x: k * rx, y: ry },
    { x: 0, y: ry },
    { x: -k * rx, y: ry },
    { x: -rx, y: k * ry },
    { x: -rx, y: 0 },
    { x: -rx, y: -k * ry },
    { x: -k * rx, y: -ry },
    { x: 0, y: -ry },
    { x: k * rx, y: -ry },
    { x: rx, y: -k * ry },
  ];

  const tPts = pts.map((p, i) => {
    const nx = p.x + noise(seed + i * 2);
    const ny = p.y + noise(seed + i * 2 + 1);
    const r = rot(nx, ny);
    return { x: cx + r.x, y: cy + r.y };
  });

  return `M ${tPts[0].x},${tPts[0].y} 
          C ${tPts[1].x},${tPts[1].y} ${tPts[2].x},${tPts[2].y} ${tPts[3].x},${tPts[3].y} 
          C ${tPts[4].x},${tPts[4].y} ${tPts[5].x},${tPts[5].y} ${tPts[6].x},${tPts[6].y} 
          C ${tPts[7].x},${tPts[7].y} ${tPts[8].x},${tPts[8].y} ${tPts[9].x},${tPts[9].y} 
          C ${tPts[10].x},${tPts[10].y} ${tPts[11].x},${tPts[11].y} ${tPts[0].x},${tPts[0].y}`;
}

// Generate a rough line
function getRoughLine(x1: number, y1: number, x2: number, y2: number, seed: number) {
  const noise = (s: number) => (seededRandom(s) - 0.5) * 8;
  const midX = (x1 + x2) / 2 + noise(seed);
  const midY = (y1 + y2) / 2 + noise(seed + 1);

  return `M ${x1},${y1} Q ${midX},${midY} ${x2},${y2}`;
}

export default function HeroGraphic() {
  const CX = 400;
  const CY = 400;

  const shapes = useMemo(() => {
    const items = [];
    let idCounter = 0;

    // 1. Concentric Circles
    for (let i = 0; i < 6; i++) {
      const r = 60 + i * 45;
      const seed = idCounter++ * 99;
      const path = getRoughCirclePath(CX, CY, r, seed);
      items.push({
        id: `circle-${i}`,
        path,
        width: 1.5 + seededRandom(seed) * 2,
        duration: (15 + seededRandom(seed) * 10) * SPEED_FACTOR,
        delay: seededRandom(seed + 1) * -10,
        type: 'circle'
      });
    }

    // 2. Primary Large Circle
    const primaryR = 320;
    const primarySeed = 777;
    items.push({
      id: 'primary-circle',
      path: getRoughCirclePath(CX, CY, primaryR, primarySeed),
      width: 4,
      duration: 25 * SPEED_FACTOR,
      delay: -5,
      type: 'primary'
    });

    // 3. Ellipses
    const angles = [0, 30, 60, 90, 120, 150];
    angles.forEach((deg, i) => {
      const seed = idCounter++ * 123;
      const path = getRoughEllipsePath(CX, CY, 280, 120, deg, seed);
      items.push({
        id: `ellipse-${i}`,
        path,
        width: 1 + seededRandom(seed) * 1.5,
        duration: (20 + seededRandom(seed) * 10) * SPEED_FACTOR,
        delay: seededRandom(seed) * -15,
        type: 'ellipse'
      });
    });

    // 4. Radiating Spokes
    for (let i = 0; i < 12; i++) {
      const deg = i * 30;
      const rad = (deg * Math.PI) / 180;
      const len = 350 + seededRandom(i) * 50;
      const x2 = CX + Math.cos(rad) * len;
      const y2 = CY + Math.sin(rad) * len;
      const seed = idCounter++ * 456;
      const path = getRoughLine(CX, CY, x2, y2, seed);
      items.push({
        id: `spoke-${i}`,
        path,
        width: 1 + seededRandom(seed),
        duration: (12 + seededRandom(seed) * 8) * SPEED_FACTOR,
        delay: seededRandom(seed) * -5,
        type: 'spoke'
      });
    }

    return items;
  }, []);

  // Static Splatters with Pop Animation
  const splatters = useMemo(() => {
    const dots = [];
    for (let i = 0; i < 50; i++) {
      const angle = seededRandom(i) * Math.PI * 2;
      const dist = seededRandom(i + 100) * 380;
      const x = CX + Math.cos(angle) * dist;
      const y = CY + Math.sin(angle) * dist;

      // Smaller size: 1px to 2.5px (was 1px to 4px)
      const size = 1 + seededRandom(i + 200) * 1.5;

      // Longer duration for less frequent appearance
      // 10s to 20s cycle
      const duration = 10 + seededRandom(i + 300) * 10;

      const delay = seededRandom(i + 400) * 10;

      dots.push({
        id: `splat-${i}`,
        cx: x,
        cy: y,
        r: size,
        duration,
        delay
      });
    }
    return dots;
  }, []);

  return (
    <div
      className="hero-knot relative mx-auto w-full max-w-[1200px] xl:max-w-[1400px] overflow-visible pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full overflow-visible"
        fill="none"
      >
        <defs>
          <radialGradient id="fade" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#000" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="800" height="800" fill="url(#fade)" opacity="0.1" />

        {/* Shapes */}
        {shapes.map((s) => (
          <path
            key={s.id}
            d={s.path}
            stroke="#111"
            strokeWidth={s.width}
            strokeOpacity={s.type === 'primary' ? 0.9 : 0.7}
            strokeLinecap="round"
            fill="none"
            pathLength={1}
            style={{
              strokeDasharray: "1 1",
              animation: `draw-erase ${s.duration}s linear infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}

        {/* Splatters - Fixed position, popping visibility */}
        {splatters.map((s) => (
          <circle
            key={s.id}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="#111"
            opacity="0.6"
            style={{
              animation: `splatter-pop ${s.duration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
              transformOrigin: `${s.cx}px ${s.cy}px`
            }}
          />
        ))}
      </svg>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";

function formatCurrency(value: number): string {
  if (!isFinite(value)) return "$0";
  return value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function RoiCalculator() {
  const [inboundPerMonth, setInboundPerMonth] = useState<number>(40);
  const [avgDealSize, setAvgDealSize] = useState<number>(1_000_000);
  const [numAnalysts, setNumAnalysts] = useState<number>(5);

  const results = useMemo(() => {
    // Fixed assumptions
    const ORIGINATION_FEE = 0.015; // 1.5% of principal
    const ANALYST_SALARY_TOTAL_COMP = 170_000; // per year, fully loaded
    const VINDIUM_REGAIN_SHARE = 0.3; // ~30% analyst-equivalent throughput
    const ANALYST_DEALS_PER_WEEK = 0.3; // per analyst
    const WEEKS_PER_MONTH = 4.33;

    // Current capacity and missed demand
    const currentCapacityDeals = numAnalysts * ANALYST_DEALS_PER_WEEK * WEEKS_PER_MONTH;
    const currentMissedDeals = Math.max(inboundPerMonth - currentCapacityDeals, 0);
    const missedDealVolume = currentMissedDeals * avgDealSize;

    // Potential regained capacity via Vindium (30% analyst-equivalent capacity)
    const regainedCapacityDeals = numAnalysts * VINDIUM_REGAIN_SHARE * ANALYST_DEALS_PER_WEEK * WEEKS_PER_MONTH;
    const regainedDeals = Math.min(currentMissedDeals, regainedCapacityDeals);
    const regainedDealVolume = regainedDeals * avgDealSize;
    const regainedFeeRevenue = regainedDealVolume * ORIGINATION_FEE;

    // Cost context
    const monthlyAnalystCost = (ANALYST_SALARY_TOTAL_COMP * numAnalysts) / 12;
    const roiMultiple = monthlyAnalystCost > 0 ? regainedFeeRevenue / monthlyAnalystCost : 0;

    return {
      missedDealVolume,
      lostRevenue: regainedFeeRevenue,
      monthlyAnalystCost,
      roiMultiple,
    };
  }, [inboundPerMonth, avgDealSize, numAnalysts]);

  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left Column: Inputs (Clean Form) */}
        <div className="flex flex-col justify-center">
          <h4 className="mb-10 text-3xl font-normal text-black sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Predict your capacity lift
          </h4>

          <div className="space-y-10">
            {/* Input 1 */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Inbound loan requests / month
                </label>
                <span className="text-3xl font-normal text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                  {inboundPerMonth}
                </span>
              </div>
              <input
                type="range"
                min={7}
                max={100}
                step={1}
                value={inboundPerMonth}
                onChange={(e) => setInboundPerMonth(Number(e.target.value))}
                className="calc-range"
              />
            </div>

            {/* Input 2 */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Average deal size
                </label>
                <span className="text-3xl font-normal text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                  {formatCurrency(avgDealSize)}
                </span>
              </div>
              <input
                type="range"
                min={500_000}
                max={250_000_000}
                step={50_000}
                value={avgDealSize}
                onChange={(e) => setAvgDealSize(Number(e.target.value))}
                className="calc-range"
              />
            </div>

            {/* Input 3 */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Number of analysts
                </label>
                <span className="text-3xl font-normal text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                  {numAnalysts}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                step={1}
                value={numAnalysts}
                onChange={(e) => setNumAnalysts(Number(e.target.value))}
                className="calc-range"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Results (Distinct Card) */}
        <div className="flex items-center">
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#fffcf5] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] ring-1 ring-black/5 sm:p-12">
            <div className="mb-8 flex items-center gap-3 opacity-60">
              <img src="/vinidum-written-logo.svg" alt="Vindium" className="h-6 w-auto" />
              <div className="h-px flex-1 bg-black/20"></div>
              <span className="text-xs font-medium uppercase tracking-wider">Projection</span>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-black/70">Potential monthly revenue increase:</p>
              <p className="text-5xl font-normal text-black sm:text-6xl" style={{ fontFamily: "var(--font-playfair)" }}>
                {formatCurrency(results.lostRevenue)}
              </p>
            </div>

            <div className="mt-10 space-y-6 border-t border-black/10 pt-8">
              <div className="flex justify-between">
                <span className="text-black/60">Missed deal volume</span>
                <span className="font-medium">{formatCurrency(results.missedDealVolume)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Current analyst cost</span>
                <span className="font-medium">{formatCurrency(results.monthlyAnalystCost)}</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-10 w-full rounded-full bg-black py-4 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a detailed report
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

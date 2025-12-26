"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
function formatCurrency(value: number): string {
  if (!isFinite(value)) return "$0";
  return value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function RoiCalculator() {
  // Inputs
  const [weeklyRecordedHours, setWeeklyRecordedHours] = useState<number>(1000); // 250–7000
  const [avgHourlyRate, setAvgHourlyRate] = useState<number>(75); // $25–$200

  // Hidden constants
  const COST_REDUCTION = 0.4; // 40% cheaper
  const EFFICIENCY_IMPROVEMENT = 0.4; // 40% more efficient
  const WEEKS_PER_MONTH = 4.33;

  const results = useMemo(() => {
    // Current weekly cost
    const currentWeeklyCost = weeklyRecordedHours * avgHourlyRate;
    
    // With Data Chateau:
    // - 40% more efficient = only need 60% of the hours
    const efficientHours = weeklyRecordedHours * (1 - EFFICIENCY_IMPROVEMENT);
    
    // - 40% cheaper = pay 60% of the rate
    const reducedRate = avgHourlyRate * (1 - COST_REDUCTION);
    
    // New weekly cost with Data Chateau
    const newWeeklyCost = efficientHours * reducedRate;
    
    // Weekly savings
    const weeklySavings = currentWeeklyCost - newWeeklyCost;
    
    // Monthly savings (4.33 weeks per month on average)
    const monthlySavings = weeklySavings * WEEKS_PER_MONTH;
    
    // Annual savings for marketing
    const annualSavings = monthlySavings * 12;
    
    // Hours saved per week due to efficiency
    const hoursSaved = weeklyRecordedHours * EFFICIENCY_IMPROVEMENT;

    return {
      monthlySavings,
      annualSavings,
      hoursSaved: hoursSaved * WEEKS_PER_MONTH, // monthly hours saved
      costReduction: COST_REDUCTION,
      efficiencyImprovement: EFFICIENCY_IMPROVEMENT,
    };
  }, [weeklyRecordedHours, avgHourlyRate]);

  return (
    <section
      className="mx-auto mt-24 w-full max-w-6xl px-4"
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left Column: Inputs */}
        <div className="flex flex-col justify-center">
          <h4
            className="mb-10 text-3xl font-normal text-black sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Calculate your cost savings
          </h4>

          <div className="space-y-10">
            {/* Input 1: Weekly Recorded Hours */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Weekly recorded hours needed
                </label>
                <span
                  className="text-3xl font-normal text-black"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {weeklyRecordedHours.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={250}
                max={7000}
                step={50}
                value={weeklyRecordedHours}
                onChange={(e) =>
                  setWeeklyRecordedHours(Number(e.target.value))
                }
                className="calc-range"
              />
            </div>

            {/* Input 2: Avg Hourly Rate */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Current hourly rate (USD)
                </label>
                <span
                  className="text-3xl font-normal text-black"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  ${avgHourlyRate}
                </span>
              </div>
              <input
                type="range"
                min={25}
                max={200}
                step={5}
                value={avgHourlyRate}
                onChange={(e) => setAvgHourlyRate(Number(e.target.value))}
                className="calc-range"
              />
            </div>

          </div>

          <p className="mt-4 text-xs text-black/50">
            Assumes {(results.costReduction * 100).toFixed(0)}% lower rates and {(results.efficiencyImprovement * 100).toFixed(0)}% greater efficiency than current providers.
          </p>
        </div>

        {/* Right Column: Results */}
        <div className="flex items-center">
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#fffcf5] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] ring-1 ring-black/5 sm:p-12">
            <div className="mb-8 flex items-center gap-3 opacity-60">
              <img
                src="/datachateau-logo.png"
                alt="Data Chateau"
                className="h-6 w-auto"
              />
              <div className="h-px flex-1 bg-black/20"></div>
              <span className="text-xs font-medium uppercase tracking-wider">
                Projection
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-black/70">
                Total monthly savings:
              </p>
              <p
                className="text-5xl font-normal text-black sm:text-6xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {formatCurrency(results.monthlySavings)}
              </p>
            </div>

            <div className="mt-10 space-y-6 border-t border-black/10 pt-8">
              <div className="flex justify-between">
                <span className="text-black/60">
                  Annual savings
                </span>
                <span className="font-medium">
                  {formatCurrency(results.annualSavings)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Hours saved per month</span>
                <span className="font-medium">
                  {results.hoursSaved.toFixed(0)}
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-10 w-full rounded-full bg-black py-4 text-sm font-medium text-white transition-all duration-200 ease-out hover:scale-[1.05] hover:shadow-xl hover:shadow-black/25 active:scale-[0.98] inline-block text-center"
            >
              Get a custom quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

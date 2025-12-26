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
  const [numFullTimeStaff, setNumFullTimeStaff] = useState<number>(10);

  // Hidden constants
  const FULL_TIME_COST_PER_YEAR = 120_000; // Average cost per FTE including overhead
  const DATA_CHATEAU_COST_REDUCTION = 0.5; // 50% cost reduction
  const EFFICIENCY_IMPROVEMENT = 0.4; // 40% more efficient

  const results = useMemo(() => {
    // Logic: Total Value = (Weekly Cost Savings)
    // Data Chateau provides same quality at 50% cost with 40% efficiency improvement
    const costReduction = DATA_CHATEAU_COST_REDUCTION;

    // 1. Current Weekly Labor Cost
    const currentWeeklyCost = weeklyRecordedHours * avgHourlyRate;

    // 2. Weekly Cost Savings (50% reduction)
    const weeklyCostSavings = currentWeeklyCost * costReduction;

    // 3. Annual Cost Savings from Full-Time Staff Replacement
    const fullTimeStaffCost = numFullTimeStaff * FULL_TIME_COST_PER_YEAR;
    const annualStaffSavings = fullTimeStaffCost * costReduction;
    const monthlyStaffSavings = annualStaffSavings / 12;

    // 4. Total Weekly Value Impact (convert monthly staff savings to weekly)
    const weeklyStaffSavings = monthlyStaffSavings * 12 / 52;
    const totalWeeklyValue = weeklyCostSavings + weeklyStaffSavings;

    return {
      totalWeeklyValue: totalWeeklyValue,
      weeklyCostSavings,
      weeklyStaffSavings,
      costReduction,
      efficiencyImprovement: EFFICIENCY_IMPROVEMENT,
    };
  }, [weeklyRecordedHours, avgHourlyRate, numFullTimeStaff]);

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

            {/* Input 3: Full-Time Staff */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Full-time staff to replace
                </label>
                <span
                  className="text-3xl font-normal text-black"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {numFullTimeStaff}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                step={1}
                value={numFullTimeStaff}
                onChange={(e) => setNumFullTimeStaff(Number(e.target.value))}
                className="calc-range"
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-black/50">
            Assumes {(results.costReduction * 100).toFixed(0)}% cost reduction
            with {(results.efficiencyImprovement * 100).toFixed(0)}% efficiency improvement.
          </p>
        </div>

        {/* Right Column: Results */}
        <div className="flex items-center">
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#fffcf5] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] ring-1 ring-black/5 sm:p-12">
            <div className="mb-8 flex items-center gap-3 opacity-60">
              <span
                className="text-lg font-normal text-black"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Data Chateau
              </span>
              <div className="h-px flex-1 bg-black/20"></div>
              <span className="text-xs font-medium uppercase tracking-wider">
                Projection
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-black/70">
                Total weekly savings:
              </p>
              <p
                className="text-5xl font-normal text-black sm:text-6xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {formatCurrency(results.totalWeeklyValue)}
              </p>
            </div>

            <div className="mt-10 space-y-6 border-t border-black/10 pt-8">
              <div className="flex justify-between">
                <span className="text-black/60">
                  Hourly labor savings (wk)
                </span>
                <span className="font-medium">
                  {formatCurrency(results.weeklyCostSavings)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Staff replacement savings (wk)</span>
                <span className="font-medium">
                  {formatCurrency(results.weeklyStaffSavings)}
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

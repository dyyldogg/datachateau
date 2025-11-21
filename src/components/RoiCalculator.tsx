"use client";

import { useMemo, useState } from "react";

function formatCurrency(value: number): string {
  if (!isFinite(value)) return "$0";
  return value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function RoiCalculator() {
  // Inputs
  const [inboundLoansPerMonth, setInboundLoansPerMonth] = useState<number>(40); // 10–100
  const [avgLoanSize, setAvgLoanSize] = useState<number>(5_000_000); // 1.5m–200m
  const [numAnalysts, setNumAnalysts] = useState<number>(5);
  
  // Hidden constants
  const ANALYST_COST_PER_YEAR = 170_000;
  const APPROVAL_RATE = 0.6; // 60% funded
  const REVENUE_MARGIN_PCT = 0.02; // 2% all-in revenue per funded loan

  const results = useMemo(() => {
    // Logic: Total Value = (Monthly Revenue Lift) + (Monthly Cost Savings)
    // Efficiency scales down with more analysts (diminishing returns)
    // Start at 50% for 1 analyst, decay to ~15% for 30 analysts
    const BASE_EFFICIENCY = 0.50; 
    const DECAY_EXPONENT = -0.35;
    const efficiencyGain = BASE_EFFICIENCY * Math.pow(numAnalysts, DECAY_EXPONENT);

    // 1. Cost Savings (Monthly)
    const totalAnalystSpendYear = numAnalysts * ANALYST_COST_PER_YEAR;
    const annualCostSavings = totalAnalystSpendYear * efficiencyGain;
    const monthlyCostSavings = annualCostSavings / 12;
    
    // 2. Revenue Capacity (Monthly)
    const baseMonthlyRevenue = inboundLoansPerMonth * avgLoanSize * APPROVAL_RATE * REVENUE_MARGIN_PCT;
    const monthlyRevenueLift = baseMonthlyRevenue * efficiencyGain;

    // 3. Total Value Impact (Monthly Headline)
    const totalMonthlyValue = monthlyRevenueLift + monthlyCostSavings;

    return {
      totalMonthlyValue,
      monthlyRevenueLift,
      monthlyCostSavings,
      efficiencyGain,
    };
  }, [inboundLoansPerMonth, avgLoanSize, numAnalysts]);

  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left Column: Inputs */}
        <div className="flex flex-col justify-center">
          <h4 className="mb-10 text-3xl font-normal text-black sm:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Predict your capacity lift
          </h4>

          <div className="space-y-10">
            {/* Input 1: Inbound */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Inbound loan requests / month
                </label>
                <span className="text-3xl font-normal text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                  {inboundLoansPerMonth}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={1}
                value={inboundLoansPerMonth}
                onChange={(e) => setInboundLoansPerMonth(Number(e.target.value))}
                className="calc-range"
              />
            </div>

            {/* Input 2: Avg Deal Size */}
            <div className="border-b border-black/10 pb-8">
              <div className="mb-4 flex items-end justify-between">
                <label className="text-sm font-medium uppercase tracking-wide text-black/60">
                  Average funded loan size (USD)
                </label>
                <span className="text-3xl font-normal text-black" style={{ fontFamily: "var(--font-playfair)" }}>
                  {formatCurrency(avgLoanSize)}
                </span>
              </div>
              <input
                type="range"
                min={1_500_000}
                max={200_000_000}
                step={500_000}
                value={avgLoanSize}
                onChange={(e) => setAvgLoanSize(Number(e.target.value))}
                className="calc-range"
              />
            </div>

            {/* Input 3: Analysts */}
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
                max={30}
                step={1}
                value={numAnalysts}
                onChange={(e) => setNumAnalysts(Number(e.target.value))}
                className="calc-range"
              />
            </div>
          </div>
          
          <p className="mt-4 text-xs text-black/50">
            Assumes {(results.efficiencyGain * 100).toFixed(0)}% efficiency gain from AI automation (diminishing returns with scale).
          </p>
        </div>

        {/* Right Column: Results */}
        <div className="flex items-center">
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#fffcf5] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] ring-1 ring-black/5 sm:p-12">
            <div className="mb-8 flex items-center gap-3 opacity-60">
              <img src="/vinidum-written-logo.svg" alt="Vindium" className="h-6 w-auto" />
              <div className="h-px flex-1 bg-black/20"></div>
              <span className="text-xs font-medium uppercase tracking-wider">Projection</span>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-black/70">Total monthly value impact:</p>
              <p className="text-5xl font-normal text-black sm:text-6xl" style={{ fontFamily: "var(--font-playfair)" }}>
                {formatCurrency(results.totalMonthlyValue)}
              </p>
            </div>

            <div className="mt-10 space-y-6 border-t border-black/10 pt-8">
              <div className="flex justify-between">
                <span className="text-black/60">Revenue capacity added (mo)</span>
                <span className="font-medium">{formatCurrency(results.monthlyRevenueLift)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/60">Analyst cost savings (mo)</span>
                <span className="font-medium">{formatCurrency(results.monthlyCostSavings)}</span>
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

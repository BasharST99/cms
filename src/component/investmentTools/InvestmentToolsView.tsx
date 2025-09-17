// src/component/investmentTools/InvestmentToolsView.tsx (CLIENT)
"use client";

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calculator,
  TrendingUp,
  BarChart3,
  PieChart,
  ArrowUpRight,
} from "lucide-react";

export default function InvestmentToolsView({ data }: { data: any }) {
  const [loanAmount, setLoanAmount] = useState(1_000_000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(25);
  const [propertyValue, setPropertyValue] = useState(1_500_000);
  const [monthlyRent, setMonthlyRent] = useState(8_000);

  const monthlyPayment = useMemo(() => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    if (r === 0) return loanAmount / n;
    return (loanAmount * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
  }, [loanAmount, interestRate, loanTerm]);

  const annualRent = monthlyRent * 12;
  const roiPercentage =
    ((annualRent - monthlyPayment * 12) / propertyValue) * 100;

  return (
    <section id="invest" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#0B3557] rounded-xl flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">
                {data.roi_calculator_title}
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {data.property_value}
                </label>
                <Input
                  type="number"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {data.monthly_rent}
                </label>
                <Input
                  type="number"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {data.loan_amount}
                </label>
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {data.interest_rate}
                </label>
                <Input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {data.loan_term}
                </label>
                <Select
                  value={loanTerm.toString()}
                  onValueChange={(value) => setLoanTerm(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 years</SelectItem>
                    <SelectItem value="20">20 years</SelectItem>
                    <SelectItem value="25">25 years</SelectItem>
                    <SelectItem value="30">30 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">
                {data.investment_summary}
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">{data.monthly_payment}</span>
                  <span className="text-xl font-semibold">
                    $
                    {monthlyPayment.toLocaleString("en-US", {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">{data.annual_rent}</span>
                  <span className="text-xl font-semibold">
                    ${annualRent.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#0B3557] text-white rounded-lg">
                  <span>ROI</span>
                  <span className="text-2xl font-bold">
                    {roiPercentage.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-4">
                {data.market_insights}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-sm">{data.market_insights_tag1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">{data.market_insights_tag2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PieChart className="h-5 w-5 text-purple-500" />
                  <span className="text-sm">{data.market_insights_tag3}</span>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90"
              size="lg"
            >
              {data.get_investment_consultation}
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

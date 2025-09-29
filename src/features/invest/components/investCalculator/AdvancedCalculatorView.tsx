"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion"; // ✅ use framer-motion (not motion/react)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, BarChart3, Download, Mail } from "lucide-react";

type Labels = {
  title: string;
  subtitle: string;
  propertyDetails: string;
  tabs: { property: string; financing: string; expenses: string };
  fields: {
    propertyValue: string;
    monthlyRent: string;
    occupancyRate: string;
    downPayment: string;
    interestRate: string;
    loanTerm: string;
    propertyTax: string;
    insurance: string;
    maintenance: string;
    managementFee: string;
  };
  analysis: {
    title: string;
    cashOnCash: string;
    capRate: string;
    annualCashFlow: string;
    noi: string;
  };
  breakdown: {
    title: string;
    grossAnnualRent: string;
    totalExpenses: string;
    loanPayment: string;
    netCashFlow: string;
  };
  buttons: { download: string; email: string };
};

export default function AdvancedCalculatorView({ labels }: { labels: Labels }) {
  const [calculatorData, setCalculatorData] = useState({
    propertyValue: 5_000_000,
    downPayment: 25,
    loanTerm: 25,
    interestRate: 3.5,
    monthlyRent: 25_000,
    occupancyRate: 90,
    propertyTax: 1.2,
    insurance: 0.8,
    maintenance: 2.5,
    management: 8,
    vacancy: 5,
    appreciation: 5,
  });

  // Derived values (memoized)
  const loanAmount = useMemo(
    () => calculatorData.propertyValue * (1 - calculatorData.downPayment / 100),
    [calculatorData.propertyValue, calculatorData.downPayment]
  );

  const monthlyPayment = useMemo(() => {
    const r = calculatorData.interestRate / 100 / 12;
    const n = calculatorData.loanTerm * 12;
    if (n <= 0) return 0;
    if (r === 0) return loanAmount / n; // handle 0% interest
    const pow = Math.pow(1 + r, n);
    const denom = pow - 1;
    if (denom === 0) return 0;
    return (loanAmount * (r * pow)) / denom;
  }, [loanAmount, calculatorData.interestRate, calculatorData.loanTerm]);

  const grossAnnualRent = useMemo(
    () =>
      calculatorData.monthlyRent * 12 * (calculatorData.occupancyRate / 100),
    [calculatorData.monthlyRent, calculatorData.occupancyRate]
  );

  const annualExpenses = useMemo(() => {
    const pv = calculatorData.propertyValue;
    const rentYear = calculatorData.monthlyRent * 12;
    return (
      (calculatorData.propertyTax / 100) * pv +
      (calculatorData.insurance / 100) * pv +
      (calculatorData.maintenance / 100) * pv +
      (calculatorData.management / 100) * grossAnnualRent +
      (calculatorData.vacancy / 100) * rentYear
    );
  }, [calculatorData, grossAnnualRent]);

  const netOperatingIncome = useMemo(
    () => grossAnnualRent - annualExpenses,
    [grossAnnualRent, annualExpenses]
  );

  const annualCashFlow = useMemo(
    () => netOperatingIncome - monthlyPayment * 12,
    [netOperatingIncome, monthlyPayment]
  );

  const cashOnCash = useMemo(() => {
    const cashInvested =
      calculatorData.propertyValue * (calculatorData.downPayment / 100);
    if (cashInvested <= 0) return 0;
    return (annualCashFlow / cashInvested) * 100;
  }, [
    annualCashFlow,
    calculatorData.propertyValue,
    calculatorData.downPayment,
  ]);

  const capRate = useMemo(
    () =>
      calculatorData.propertyValue > 0
        ? (netOperatingIncome / calculatorData.propertyValue) * 100
        : 0,
    [netOperatingIncome, calculatorData.propertyValue]
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {labels.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {labels.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Calculator className="h-6 w-6 text-[#0B3557]" />
              {labels.propertyDetails}
            </h3>

            <Tabs defaultValue="property" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="property">
                  {labels.tabs.property}
                </TabsTrigger>
                <TabsTrigger value="financing">
                  {labels.tabs.financing}
                </TabsTrigger>
                <TabsTrigger value="expenses">
                  {labels.tabs.expenses}
                </TabsTrigger>
              </TabsList>

              {/* Property */}
              <TabsContent value="property" className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.propertyValue}
                  </label>
                  <Input
                    type="number"
                    value={calculatorData.propertyValue}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        propertyValue: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.monthlyRent}
                  </label>
                  <Input
                    type="number"
                    value={calculatorData.monthlyRent}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        monthlyRent: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.occupancyRate}
                  </label>
                  <Slider
                    value={[calculatorData.occupancyRate]}
                    onValueChange={(value) =>
                      setCalculatorData({
                        ...calculatorData,
                        occupancyRate: value[0],
                      })
                    }
                    max={100}
                    min={70}
                    step={1}
                  />
                  <div className="text-sm text-gray-600 mt-1">
                    {calculatorData.occupancyRate}%
                  </div>
                </div>
              </TabsContent>

              {/* Financing */}
              <TabsContent value="financing" className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.downPayment}
                  </label>
                  <Slider
                    value={[calculatorData.downPayment]}
                    onValueChange={(value) =>
                      setCalculatorData({
                        ...calculatorData,
                        downPayment: value[0],
                      })
                    }
                    max={50}
                    min={10}
                    step={5}
                  />
                  <div className="text-sm text-gray-600 mt-1">
                    {calculatorData.downPayment}%
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.interestRate}
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.interestRate}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        interestRate: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.loanTerm}
                  </label>
                  <Select
                    value={calculatorData.loanTerm.toString()}
                    onValueChange={(value) =>
                      setCalculatorData({
                        ...calculatorData,
                        loanTerm: Number(value),
                      })
                    }
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
              </TabsContent>

              {/* Expenses */}
              <TabsContent value="expenses" className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.propertyTax}
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.propertyTax}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        propertyTax: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.insurance}
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.insurance}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        insurance: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.maintenance}
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.maintenance}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        maintenance: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {labels.fields.managementFee}
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.management}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        management: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Key Metrics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#0B3557]" />
                {labels.analysis.title}
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#0B3557] text-white rounded-lg text-center">
                  <div className="text-2xl font-bold">
                    {cashOnCash.toFixed(1)}%
                  </div>
                  <div className="text-sm opacity-90">
                    {labels.analysis.cashOnCash}
                  </div>
                </div>
                <div className="p-4 bg-green-500 text-white rounded-lg text-center">
                  <div className="text-2xl font-bold">
                    {capRate.toFixed(1)}%
                  </div>
                  <div className="text-sm opacity-90">
                    {labels.analysis.capRate}
                  </div>
                </div>
                <div className="p-4 bg-blue-500 text-white rounded-lg text-center">
                  <div className="text-2xl font-bold">
                    ₹{Math.round(annualCashFlow).toLocaleString()}
                  </div>
                  <div className="text-sm opacity-90">
                    {labels.analysis.annualCashFlow}
                  </div>
                </div>
                <div className="p-4 bg-purple-500 text-white rounded-lg text-center">
                  <div className="text-2xl font-bold">
                    ₹{Math.round(netOperatingIncome).toLocaleString()}
                  </div>
                  <div className="text-sm opacity-90">
                    {labels.analysis.noi}
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-6">
                {labels.breakdown.title}
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">
                    {labels.breakdown.grossAnnualRent}
                  </span>
                  <span className="font-semibold">
                    ₹{Math.round(grossAnnualRent).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">
                    {labels.breakdown.totalExpenses}
                  </span>
                  <span className="font-semibold text-red-600">
                    -₹{Math.round(annualExpenses).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">
                    {labels.breakdown.loanPayment}
                  </span>
                  <span className="font-semibold text-red-600">
                    -₹{Math.round(monthlyPayment * 12).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-2 font-semibold text-lg border-t-2">
                  <span>{labels.breakdown.netCashFlow}</span>
                  <span
                    className={
                      annualCashFlow >= 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    ₹{Math.round(annualCashFlow).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90"
                size="lg"
              >
                <Download className="h-4 w-4 mr-2" />
                {labels.buttons.download}
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                {labels.buttons.email}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

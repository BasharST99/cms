// SERVER COMPONENT (no "use client")
import AdvancedCalculatorView from "./AdvancedCalculatorView";
import { dxGet } from "@/lib/directus/server";

type Row = {
  id: number;
  title?: string;
  subtitle?: string;
  property_details?: string;
  select1?: string; // "Property"
  select2?: string; // "Financing"
  select3?: string; // "Expenses"
  property_value?: string;
  monthly_rent?: string;
  occupancy_rate?: string;
  down_payment?: string;
  interest_rate?: string;
  loan_term?: string;
  property_tax?: string;
  insurance?: string;
  maintenance?: string;
  management_fee?: string;
  investment_analysis?: string;
  Cash_on_cash_return?: string;
  cap_rate?: string;
  annual_cash_flow?: string;
  net_nperating_income?: string; // note CMS typo
  financial_breakdown?: string;
  gross_annual_rent?: string;
  total_expenses?: string;
  loan_payment?: string;
  net_cash_flow?: string;
  button1?: string;
  button2?: string;
};

export default async function InvestmentCalculatorSection() {
  const { data } = await dxGet<{ data: Row[] }>(
    "/items/investment_calculator",
    { limit: "1", fields: "*" },
    3600 // ISR: revalidate every hour
  );

  const row = data?.[0];
  if (!row) return null;

  const labels = {
    title: row.title ?? "Investment Calculator",
    subtitle:
      row.subtitle ??
      "Calculate detailed returns, cash flow, and investment metrics for any property",
    propertyDetails: row.property_details ?? "Property Details",
    tabs: {
      property: row.select1 ?? "Property",
      financing: row.select2 ?? "Financing",
      expenses: row.select3 ?? "Expenses",
    },
    fields: {
      propertyValue: row.property_value ?? "Property Value (₹)",
      monthlyRent: row.monthly_rent ?? "Monthly Rent (₹)",
      occupancyRate: row.occupancy_rate ?? "Occupancy Rate (%)",
      downPayment: row.down_payment ?? "Down Payment (%)",
      interestRate: row.interest_rate ?? "Interest Rate (%)",
      loanTerm: row.loan_term ?? "Loan Term (years)",
      propertyTax: row.property_tax ?? "Property Tax (%)",
      insurance: row.insurance ?? "Insurance (%)",
      maintenance: row.maintenance ?? "Maintenance (%)",
      managementFee: row.management_fee ?? "Management Fee (%)",
    },
    analysis: {
      title: row.investment_analysis ?? "Investment Analysis",
      cashOnCash: row.Cash_on_cash_return ?? "Cash-on-Cash Return",
      capRate: row.cap_rate ?? "Cap Rate",
      annualCashFlow: row.annual_cash_flow ?? "Annual Cash Flow",
      noi: row.net_nperating_income ?? "Net Operating Income",
    },
    breakdown: {
      title: row.financial_breakdown ?? "Financial Breakdown",
      grossAnnualRent: row.gross_annual_rent ?? "Gross Annual Rent",
      totalExpenses: row.total_expenses ?? "Total Expenses",
      loanPayment: row.loan_payment ?? "Loan Payment",
      netCashFlow: row.net_cash_flow ?? "Net Cash Flow",
    },
    buttons: {
      download: row.button1 ?? "Download Report",
      email: row.button2 ?? "Email Analysis",
    },
  };

  return <AdvancedCalculatorView labels={labels} />;
}

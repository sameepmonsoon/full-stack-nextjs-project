const IncomeCategoryConstant: any = [
  { label: "Primary", value: "primary" },
  { label: "Savings", value: "savings" },
  { label: "Investment", value: "investment" },
  { label: "Bonus", value: "bonus" },
  { label: "Rental", value: "rental" },
  { label: "Side Hustle", value: "side_hustle" },
  { label: "Other", value: "other" },
];
const IncomeSubcategoryConstant: any = {
  primary: [
    { label: "Salary", value: "salary" },
    { label: "Overtime Pay", value: "overtime_pay" },
  ],
  savings: [
    { label: "Interest Income", value: "interest_income" },
    { label: "Dividend Income", value: "dividend_income" },
  ],
  investment: [
    { label: "Stock Dividends", value: "stock_dividends" },
    { label: "Capital Gains", value: "capital_gains" },
  ],
  bonus: [
    { label: "Year-End Bonus", value: "year_end_bonus" },
    { label: "Performance Bonus", value: "performance_bonus" },
  ],
  rental: [
    { label: "Residential Rental", value: "residential_rental" },
    { label: "Commercial Rental", value: "commercial_rental" },
  ],
  side_hustle: [
    { label: "Freelance Earnings", value: "freelance_earnings" },
    { label: "Consulting Fees", value: "consulting_fees" },
  ],
  other: [
    { label: "Gifts and Donations", value: "gifts_and_donations" },
    { label: "Reimbursements", value: "reimbursements" },
  ],
};

const PaymentMethodConstant: any = [
  { value: "cash", label: "Cash" },
  { value: "bank", label: "Bank" },
  { value: "cheque", label: "Cheque" },
];
const incomeCardConstant: any = [
  { value: "cash", label: "Cash" },
  { value: "bank", label: "Bank" },
  { value: "cheque", label: "Cheque" },
  { value: "income", label: "Income" },
];

export {
  IncomeCategoryConstant,
  PaymentMethodConstant,
  IncomeSubcategoryConstant,
  incomeCardConstant,
};

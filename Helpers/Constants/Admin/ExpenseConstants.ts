const ExpenseCategoryConstant: any = [
  { label: "Housing", value: "housing" },
  { label: "Utilities", value: "utilities" },
  { label: "Transportation", value: "transportation" },
  { label: "Food", value: "food" },
  { label: "Health", value: "health" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Miscellaneous", value: "miscellaneous" },
  { label: "Debt Payments", value: "debt_payments" },
];
const ExpenseSubcategoryConstant: any = {
  housing: [
    { label: "Rent or Mortgage", value: "rent_or_mortgage" },
    { label: "Property Taxes", value: "property_taxes" },
    { label: "Home Insurance", value: "home_insurance" },
  ],
  utilities: [
    { label: "Electricity Bill", value: "electricity_bill" },
    { label: "Water Bill", value: "water_bill" },
    { label: "Internet and Cable", value: "internet_and_cable" },
  ],
  transportation: [
    { label: "Fuel", value: "fuel" },
    { label: "Public Transportation", value: "public_transportation" },
    { label: "Vehicle Maintenance", value: "vehicle_maintenance" },
  ],
  food: [
    { label: "Groceries", value: "groceries" },
    { label: "Dining Out", value: "dining_out" },
    { label: "Snacks", value: "snacks" },
  ],
  health: [
    { label: "Health Insurance", value: "health_insurance" },
    { label: "Medications", value: "medications" },
    { label: "Doctor Visits", value: "doctor_visits" },
  ],
  entertainment: [
    { label: "Movies and Streaming", value: "movies_and_streaming" },
    { label: "Concerts and Events", value: "concerts_and_events" },
    { label: "Hobbies", value: "hobbies" },
  ],
  miscellaneous: [
    { label: "Shopping", value: "shopping" },
    { label: "Gifts", value: "gifts" },
    { label: "Subscriptions", value: "subscriptions" },
  ],
  debt_payments: [
    { label: "Credit Card Payments", value: "credit_card_payments" },
    { label: "Loan Repayments", value: "loan_repayments" },
  ],
};

const PaymentMethodConstant: any = [
  { value: "cash", label: "Cash" },
  { value: "bank", label: "Bank" },
  { value: "cheque", label: "Cheque" },
];
const expenseCardConstant: any = [
  { value: "cash", label: "Cash" },
  { value: "bank", label: "Bank" },
  { value: "cheque", label: "Cheque" },
  { value: "expense", label: "Expense" },
];

export {
  ExpenseCategoryConstant,
  PaymentMethodConstant,
  ExpenseSubcategoryConstant,
  expenseCardConstant,
};

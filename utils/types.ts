export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
};

export interface AddIncomeFormValueType {
  title: string;
  amount: number | string;
  source: string;
  category: { value?: string; label?: string } | any;
  date: Date | null;
  note: string;
  method: string;
  userId: string;
  incomeId?: string;
}
export interface AddExpenseFormValueType {
  title: string;
  amount: number | string;
  source: string | { value?: string; label?: string };
  category: { value?: string; label?: string } | any;
  date: Date | null;
  note: string;
  method: string | { value?: string; label?: string };
  userId: string;
  expenseId?: string;
}

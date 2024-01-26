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
  amount: number;
  source: string;
  category: { value?: string; label?: string } | any;
  date: Date;
  note: string;
  method: string;
  userId: string;
}

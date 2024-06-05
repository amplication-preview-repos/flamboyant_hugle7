import { Currency } from "../currency/Currency";

export type Order = {
  createdAt: Date;
  currencies?: Array<Currency>;
  customer: string | null;
  date: Date | null;
  id: string;
  orderNumber: string | null;
  product?: Array<"Option1">;
  totalAmount: number | null;
  updatedAt: Date;
};

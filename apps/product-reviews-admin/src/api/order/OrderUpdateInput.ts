import { CurrencyUpdateManyWithoutOrdersInput } from "./CurrencyUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  currencies?: CurrencyUpdateManyWithoutOrdersInput;
  customer?: string | null;
  date?: Date | null;
  orderNumber?: string | null;
  product?: Array<"Option1">;
  totalAmount?: number | null;
};

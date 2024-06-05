import { CurrencyCreateNestedManyWithoutOrdersInput } from "./CurrencyCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  currencies?: CurrencyCreateNestedManyWithoutOrdersInput;
  customer?: string | null;
  date?: Date | null;
  orderNumber?: string | null;
  product?: Array<"Option1">;
  totalAmount?: number | null;
};

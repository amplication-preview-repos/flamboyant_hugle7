import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CurrencyCreateInput = {
  code?: string | null;
  exchangeRate?: number | null;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  symbolField?: string | null;
};

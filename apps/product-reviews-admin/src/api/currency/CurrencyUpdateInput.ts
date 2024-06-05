import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CurrencyUpdateInput = {
  code?: string | null;
  exchangeRate?: number | null;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  symbolField?: string | null;
};

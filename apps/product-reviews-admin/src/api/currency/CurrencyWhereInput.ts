import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CurrencyWhereInput = {
  code?: StringNullableFilter;
  exchangeRate?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  symbolField?: StringNullableFilter;
};

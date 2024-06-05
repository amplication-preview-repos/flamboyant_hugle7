import { CurrencyListRelationFilter } from "../currency/CurrencyListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  currencies?: CurrencyListRelationFilter;
  customer?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  orderNumber?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
};

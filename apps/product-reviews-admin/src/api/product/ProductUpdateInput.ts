import { CurrencyUpdateManyWithoutProductsInput } from "./CurrencyUpdateManyWithoutProductsInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  currencies?: CurrencyUpdateManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};

import { CurrencyCreateNestedManyWithoutProductsInput } from "./CurrencyCreateNestedManyWithoutProductsInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  currencies?: CurrencyCreateNestedManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};

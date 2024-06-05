import { ProductAddOnWhereInput } from "./ProductAddOnWhereInput";
import { ProductAddOnOrderByInput } from "./ProductAddOnOrderByInput";

export type ProductAddOnFindManyArgs = {
  where?: ProductAddOnWhereInput;
  orderBy?: Array<ProductAddOnOrderByInput>;
  skip?: number;
  take?: number;
};

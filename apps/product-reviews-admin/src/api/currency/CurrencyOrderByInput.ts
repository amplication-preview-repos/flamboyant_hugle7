import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  exchangeRate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};

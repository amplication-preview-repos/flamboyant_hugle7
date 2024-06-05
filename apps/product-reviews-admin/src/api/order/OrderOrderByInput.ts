import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  orderNumber?: SortOrder;
  product?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};

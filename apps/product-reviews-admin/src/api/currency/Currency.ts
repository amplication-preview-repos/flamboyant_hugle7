import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type Currency = {
  code: string | null;
  createdAt: Date;
  exchangeRate: number | null;
  id: string;
  name: string | null;
  order?: Order | null;
  product?: Product | null;
  symbolField: string | null;
  updatedAt: Date;
};

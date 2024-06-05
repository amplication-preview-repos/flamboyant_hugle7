import { Currency } from "../currency/Currency";
import { Review } from "../review/Review";

export type Product = {
  createdAt: Date;
  currencies?: Array<Currency>;
  description: string | null;
  id: string;
  name: string | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};

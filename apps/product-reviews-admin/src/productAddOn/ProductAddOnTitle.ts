import { ProductAddOn as TProductAddOn } from "../api/productAddOn/ProductAddOn";

export const PRODUCTADDON_TITLE_FIELD = "id";

export const ProductAddOnTitle = (record: TProductAddOn): string => {
  return record.id?.toString() || String(record.id);
};

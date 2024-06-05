import { UserLocation as TUserLocation } from "../api/userLocation/UserLocation";

export const USERLOCATION_TITLE_FIELD = "address";

export const UserLocationTitle = (record: TUserLocation): string => {
  return record.address?.toString() || String(record.id);
};

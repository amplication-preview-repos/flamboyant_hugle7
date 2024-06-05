import { UserLocationWhereInput } from "./UserLocationWhereInput";
import { UserLocationOrderByInput } from "./UserLocationOrderByInput";

export type UserLocationFindManyArgs = {
  where?: UserLocationWhereInput;
  orderBy?: Array<UserLocationOrderByInput>;
  skip?: number;
  take?: number;
};

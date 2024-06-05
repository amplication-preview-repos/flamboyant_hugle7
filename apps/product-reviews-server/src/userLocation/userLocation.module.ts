import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserLocationModuleBase } from "./base/userLocation.module.base";
import { UserLocationService } from "./userLocation.service";
import { UserLocationController } from "./userLocation.controller";
import { UserLocationResolver } from "./userLocation.resolver";

@Module({
  imports: [UserLocationModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserLocationController],
  providers: [UserLocationService, UserLocationResolver],
  exports: [UserLocationService],
})
export class UserLocationModule {}

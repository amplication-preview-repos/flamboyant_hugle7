import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductAddOnModuleBase } from "./base/productAddOn.module.base";
import { ProductAddOnService } from "./productAddOn.service";
import { ProductAddOnController } from "./productAddOn.controller";
import { ProductAddOnResolver } from "./productAddOn.resolver";

@Module({
  imports: [ProductAddOnModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductAddOnController],
  providers: [ProductAddOnService, ProductAddOnResolver],
  exports: [ProductAddOnService],
})
export class ProductAddOnModule {}

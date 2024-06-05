import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductOrderModuleBase } from "./base/productOrder.module.base";
import { ProductOrderService } from "./productOrder.service";
import { ProductOrderController } from "./productOrder.controller";
import { ProductOrderResolver } from "./productOrder.resolver";

@Module({
  imports: [ProductOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductOrderController],
  providers: [ProductOrderService, ProductOrderResolver],
  exports: [ProductOrderService],
})
export class ProductOrderModule {}

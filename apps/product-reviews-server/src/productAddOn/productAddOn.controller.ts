import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductAddOnService } from "./productAddOn.service";
import { ProductAddOnControllerBase } from "./base/productAddOn.controller.base";

@swagger.ApiTags("productAddOns")
@common.Controller("productAddOns")
export class ProductAddOnController extends ProductAddOnControllerBase {
  constructor(
    protected readonly service: ProductAddOnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

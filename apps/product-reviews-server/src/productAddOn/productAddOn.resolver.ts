import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProductAddOnResolverBase } from "./base/productAddOn.resolver.base";
import { ProductAddOn } from "./base/ProductAddOn";
import { ProductAddOnService } from "./productAddOn.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProductAddOn)
export class ProductAddOnResolver extends ProductAddOnResolverBase {
  constructor(
    protected readonly service: ProductAddOnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

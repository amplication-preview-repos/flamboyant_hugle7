/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Currency } from "./Currency";
import { CurrencyCountArgs } from "./CurrencyCountArgs";
import { CurrencyFindManyArgs } from "./CurrencyFindManyArgs";
import { CurrencyFindUniqueArgs } from "./CurrencyFindUniqueArgs";
import { CreateCurrencyArgs } from "./CreateCurrencyArgs";
import { UpdateCurrencyArgs } from "./UpdateCurrencyArgs";
import { DeleteCurrencyArgs } from "./DeleteCurrencyArgs";
import { Order } from "../../order/base/Order";
import { Product } from "../../product/base/Product";
import { CurrencyService } from "../currency.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Currency)
export class CurrencyResolverBase {
  constructor(
    protected readonly service: CurrencyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  async _currenciesMeta(
    @graphql.Args() args: CurrencyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Currency])
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  async currencies(
    @graphql.Args() args: CurrencyFindManyArgs
  ): Promise<Currency[]> {
    return this.service.currencies(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Currency, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "own",
  })
  async currency(
    @graphql.Args() args: CurrencyFindUniqueArgs
  ): Promise<Currency | null> {
    const result = await this.service.currency(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Currency)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "create",
    possession: "any",
  })
  async createCurrency(
    @graphql.Args() args: CreateCurrencyArgs
  ): Promise<Currency> {
    return await this.service.createCurrency({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Currency)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async updateCurrency(
    @graphql.Args() args: UpdateCurrencyArgs
  ): Promise<Currency | null> {
    try {
      return await this.service.updateCurrency({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Currency)
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "delete",
    possession: "any",
  })
  async deleteCurrency(
    @graphql.Args() args: DeleteCurrencyArgs
  ): Promise<Currency | null> {
    try {
      return await this.service.deleteCurrency(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Order, {
    nullable: true,
    name: "order",
  })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async getOrder(@graphql.Parent() parent: Currency): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async getProduct(
    @graphql.Parent() parent: Currency
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

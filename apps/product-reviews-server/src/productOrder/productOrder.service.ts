import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductOrderServiceBase } from "./base/productOrder.service.base";

@Injectable()
export class ProductOrderService extends ProductOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

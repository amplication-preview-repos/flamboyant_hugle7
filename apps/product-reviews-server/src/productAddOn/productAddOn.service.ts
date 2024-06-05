import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductAddOnServiceBase } from "./base/productAddOn.service.base";

@Injectable()
export class ProductAddOnService extends ProductAddOnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

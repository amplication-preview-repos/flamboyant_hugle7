import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserLocationServiceBase } from "./base/userLocation.service.base";

@Injectable()
export class UserLocationService extends UserLocationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

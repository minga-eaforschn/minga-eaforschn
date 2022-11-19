import { Controller, Get, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { OwnerWithPetQuery } from "./gql/graphql";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/owner")
  getOwnerWithPet(
    @Query("ownerName") ownerName: string
  ): Promise<OwnerWithPetQuery> {
    console.log(ownerName);
    return this.appService.getOwnerWithPet(ownerName);
  }
}

import { Injectable } from "@nestjs/common";
import { InjectGraphQLClient } from "@golevelup/nestjs-graphql-request";
import { GraphQLClient } from "graphql-request";
import { OwnerWithPetDocument, OwnerWithPetQuery } from "./gql/graphql";

@Injectable()
export class AppService {
  constructor(@InjectGraphQLClient() private readonly client: GraphQLClient) {
  }

  getOwnerWithPet(ownerName: string): Promise<OwnerWithPetQuery> {
    return this.client.request(OwnerWithPetDocument, { owner_name: ownerName });
  }

  getHello(): string {
    return "Hello World!";
  }
}

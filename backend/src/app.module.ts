import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLRequestModule } from "@golevelup/nestjs-graphql-request";

@Module({
  imports: [
    GraphQLRequestModule.forRoot(GraphQLRequestModule, {
      // Exposes configuration options based on the graphql-request package
      endpoint: "https://api.stephan.vm.selectcode.io/v1/graphql",
      options: {
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret": "myadminsecretkey"
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule {
}

import { DynamicModule, Module } from "@nestjs/common";
import { ConfigService } from "./services/config/config.service";

@Module({})
export class ConfigModule {
  public static register(): DynamicModule {
    return {
      module: ConfigModule,
      exports: [ConfigService],
    };
  }
}

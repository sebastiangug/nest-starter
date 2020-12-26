import { DynamicModule, Module } from "@nestjs/common";
import { LoggerService } from "./services/logger/logger.service";

@Module({})
export class LoggerModule {
  public static register(): DynamicModule {
    return {
      module: LoggerModule,
      exports: [LoggerService],
    };
  }
}

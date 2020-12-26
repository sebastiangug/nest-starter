import { DynamicModule, Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { LoggerModule } from "../logger/logger.module";
import { AppleStrategy } from "./strategies/apple.strategy";
import { GoogleStrategy } from "./strategies/google.strategy";
import { MicrosoftStrategy } from "./strategies/microsoft.strategy";
import { AuthImplementationService } from "./services/auth-implementation/auth-implementation.service";

@Module({})
export class AuthModule {
  public static register(custom_auth_service: AuthImplementationService): DynamicModule {
    return {
      module: AuthModule,
      imports: [LoggerModule.register()],
      providers: [
        AppleStrategy,
        GoogleStrategy,
        MicrosoftStrategy,
        AuthImplementationService,
        {
          provide: "AuthImplementationService",
          useFactory: () => {
            return custom_auth_service;
          },
        },
      ],
      controllers: [AuthController],
    };
  }
}

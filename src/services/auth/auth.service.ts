import { Injectable } from "@nestjs/common";
import {
  IOIDCStrategyOptionWithRequest,
  VerifyOIDCFunctionWithReq,
} from "passport-azure-ad";
import {
  StrategyOptionsWithRequest,
  VerifyCallback,
} from "passport-google-oauth20";
import {
  AuthenticateOptionsWithRequest,
  VerifyFunctionWithRequest,
} from "passport-apple";
import { AuthImplementationService } from "src/modules/auth/services/auth-implementation/auth-implementation.service";
import { ConfigService } from "src/modules/config/services/config/config.service";
import { SecretsService } from "src/modules/secrets/secrets/secrets.service";
import { Request } from "express";

@Injectable()
export class AuthService implements AuthImplementationService {
  constructor(
    private readonly secretsService: SecretsService,
    private readonly configService: ConfigService,
  ) {}

  // configuration for apple strategy
  public apple_auth_config(): AuthenticateOptionsWithRequest {
    return {
      clientID: this.secretsService.get("apple_clientid"),
      teamID: this.secretsService.get("apple_teamid"),
      keyID: this.secretsService.get("apple_keyid"),
      privateKeyString: this.secretsService
        .get("apple_privatekey")
        .replace(/\\n/g, "\n"),
      passReqToCallback: true,
      callbackURL: `${this.configService.get_backend_root_url()}/auth/apple/redirect`,
      scope: ["email", "name"],
    };
  }

  public apple_callback(
    req: unknown,
    accessToken: unknown,
    refreshToken: unknown,
    decodedIdToken: unknown,
    profile: unknown,
    done: unknown,
  ): VerifyFunctionWithRequest {
    throw new Error("Apple callback not implemented");
  }

  public apple_custom_state(req: Request): object {
    return {};
  }

  // configuration for google strategy
  public google_auth_config(): StrategyOptionsWithRequest {
    return {
      clientID: this.secretsService.get("google_clientid"),
      clientSecret: this.secretsService.get("google_secret"),
      passReqToCallback: true,
      scope: ["email", "profile"],
      callbackURL: `${this.configService.get_backend_root_url()}/auth/google/redirect`,
    };
  }

  public google_callback(
    req: unknown,
    accessToken: unknown,
    refreshToken: unknown,
    decodedIdToken: unknown,
    profile: unknown,
    done: unknown,
  ): VerifyCallback {
    //
    return;
  }

  public google_custom_state(req: Request): object {
    return {};
  }

  // configuration for microsoft strategy
  public microsoft_auth_config(): IOIDCStrategyOptionWithRequest {
    return {
      identityMetadata: this.secretsService.get("microsoft_endpoint"),
      clientID: this.secretsService.get("microsoft_clientid"),
      loggingLevel: "error",
      validateIssuer: false,
      clientSecret: this.secretsService.get("microsoft_secret"),
      responseType: "code",
      passReqToCallback: true,
      responseMode: "form_post",
      useCookieInsteadOfSession: true,
      scope: ["openid", "email", "profile"],
      redirectUrl: `${this.configService.get_backend_root_url()}/auth/microsoft/redirect`,
      cookieEncryptionKeys: [
        {
          key: this.secretsService.get("app_encryptionkey"),
          iv: this.secretsService.get("app_iv"),
        },
      ],
    };
  }

  public microsoft_callback(
    req: unknown,
    iss: unknown,
    sub: unknown,
    profile: unknown,
    jwtClaims: unknown,
    access_token: unknown,
    refresh_token: unknown,
    params: unknown,
    done: unknown,
  ): VerifyOIDCFunctionWithReq {
    throw new Error("Microsoft callback not implemented");
  }

  public microsoft_custom_state(req: Request): object {
    return {};
  }
}

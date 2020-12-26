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
import { Request } from "express";

@Injectable()
export class AuthImplementationService {
  public apple_auth_config(): AuthenticateOptionsWithRequest {
    throw new Error("Apple auth config not implemented");
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
    throw new Error("Apple custom state not implemented");
  }

  public google_auth_config(): StrategyOptionsWithRequest {
    throw new Error("Google auth config not implemented");
  }

  public google_callback(
    req: unknown,
    accessToken: unknown,
    refreshToken: unknown,
    decodedIdToken: unknown,
    profile: unknown,
    done: unknown,
  ): VerifyCallback {
    throw new Error("Google callback config not implemented");
  }

  public google_custom_state(req: Request): object {
    throw new Error("Google custom state not implemented");
  }

  public microsoft_auth_config(): IOIDCStrategyOptionWithRequest {
    throw new Error("Microsoft auth config not implemented");
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
    throw new Error("Microsoft custom state not implemented");
  }
}

// import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-google-oauth20";
import { Injectable, Inject } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { AuthImplementationService } from "../services/auth-implementation/auth-implementation.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(
    @Inject("AuthImplementationService")
    private readonly authService: AuthImplementationService,
  ) {
    super(
      authService.microsoft_auth_config(),
      async (req, accessToken, refreshToken, decodedIdToken, profile, done) => {
        return authService.google_callback(
          req,
          accessToken,
          refreshToken,
          decodedIdToken,
          profile,
          done,
        );
      },
    );
  }

  authenticate(req: Request, options: any): any {
    super.authenticate(
      req,
      Object.assign(options, {
        state: JSON.stringify(this.authService.google_custom_state(req)),
      }),
    );
  }
}

import * as Strategy from "passport-apple";

import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { Inject, Injectable } from "@nestjs/common";
import { AuthImplementationService } from "../services/auth-implementation/auth-implementation.service";

@Injectable()
export class AppleStrategy extends PassportStrategy(Strategy, "apple") {
  constructor(
    @Inject("AuthImplementationService")
    private readonly authService: AuthImplementationService,
  ) {
    super(
      authService.apple_auth_config(),
      async (req, accessToken, refreshToken, decodedIdToken, profile, done) => {
        return authService.apple_callback(
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
        state: JSON.stringify(this.authService.apple_custom_state(req)),
      }),
    );
  }
}

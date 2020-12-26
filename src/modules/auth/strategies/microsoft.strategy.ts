import { Injectable, Inject } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { OIDCStrategy } from "passport-azure-ad";
import { AuthImplementationService } from "../services/auth-implementation/auth-implementation.service";

@Injectable()
export class MicrosoftStrategy extends PassportStrategy(
  OIDCStrategy,
  "microsoft",
) {
  constructor(
    @Inject("AuthImplementationService")
    private readonly authService: AuthImplementationService,
  ) {
    super(
      authService.microsoft_auth_config(),
      async (
        req,
        iss,
        sub,
        profile,
        jwtClaims,
        access_token,
        refresh_token,
        params,
        done,
      ) => {
        return authService.microsoft_callback(
          req,
          iss,
          sub,
          profile,
          jwtClaims,
          access_token,
          refresh_token,
          params,
          done,
        );
      },
    );
  }

  // in order to pass custom state to the redirect
  authenticate(req: Request, options: any) {
    super.authenticate(
      req,
      Object.assign(options, {
        customState: JSON.stringify(
          this.authService.microsoft_custom_state(req),
        ),
      }),
    );
  }
}

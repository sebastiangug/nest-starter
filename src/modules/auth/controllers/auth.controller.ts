import { Controller, Get, UseGuards, Req, Res } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { LoggerService } from "src/modules/logger/services/logger/logger.service";
import { Request, Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly logger: LoggerService) {}

  // APPLE
  // SIGN IN
  @Get("sign-in/apple")
  @UseGuards(AuthGuard("apple"))
  private _sign_in_apple_auth() {}

  @Get("sign-in/apple/redirect")
  @UseGuards(AuthGuard("apple"))
  private _sign_in_apple_auth_redirect(@Req() req: Request, @Res() res: Response) {}

  // REGISTER
  @Get("register/apple")
  @UseGuards(AuthGuard("apple"))
  private _register_apple_auth() {}

  @Get("register/apple/redirect")
  @UseGuards(AuthGuard("apple"))
  private _register_apple_auth_redirect(@Req() req: Request, @Res() res: Response) {}

  // GOOGLE
  // SIGN IN
  @Get("sign-in/google")
  @UseGuards(AuthGuard("google"))
  private _sign_in_google_auth() {}

  @Get("sign-in/google/redirect")
  @UseGuards(AuthGuard("google"))
  private _sign_in_google_auth_redirect(@Req() req: Request, @Res() res: Response) {}

  // REGISTER
  @Get("register/google")
  @UseGuards(AuthGuard("google"))
  private _register_google_auth() {}

  @Get("register/google/redirect")
  @UseGuards(AuthGuard("google"))
  private _register_google_auth_redirect(@Req() req: Request, @Res() res: Response) {}

  // MICROSOFT
  // SIGN IN

  @Get("sign-in/microsoft")
  @UseGuards(AuthGuard("microsoft"))
  private _sign_in_microsoft_auth() {}

  @Get("sign-in/microsoft/redirect")
  @UseGuards(AuthGuard("microsoft"))
  private _sign_in_microsoft_auth_redirect(@Req() req: Request, @Res() res: Response) {}

  // REGISTER
  @Get("register/microsoft")
  @UseGuards(AuthGuard("microsoft"))
  private _register_microsoft_auth() {}

  @Get("register/microsoft/redirect")
  @UseGuards(AuthGuard("microsoft"))
  private _register_microsoft_auth_redirect(@Req() req: Request, @Res() res: Response) {}
}

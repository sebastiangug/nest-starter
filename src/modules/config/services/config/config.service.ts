import { Injectable } from "@nestjs/common";
import * as fs from "fs";

export enum Environments {
  Production = "PRODUCTION",
  Development = "DEVELOPMENT",
  STAGING = "STAGING",
}

@Injectable()
export class ConfigService {
  public environment(): Environments {
    return (
      (process.env.ENVIRONMENT as Environments) ?? Environments.Development
    );
  }

  public get_backend_root_url(): string {
    return "";
  }
}

import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
  public get_backend_root_url(): string {
    return "";
  }
}

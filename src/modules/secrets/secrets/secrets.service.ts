import { Inject, Injectable } from "@nestjs/common";
import { ISecret } from "../secrets.module";
@Injectable()
export class SecretsService {
  constructor(
    // secrets preloaded on application start will be available here
    @Inject("preloaded_secrets")
    public readonly preloaded_secrets: ISecret[],
  ) {}

  // You can build upon the login here to asynchronously retrieve secrets
  public get(name: string): string {
    // returning either from the preloaded secrets or from environment
    const secret =
      this.preloaded_secrets.find((el) => el.name === name)?.value ??
      process.env[name];

    // throwing an error if we didn't find that secret anywhere
    if (!secret) {
      throw new Error(
        `Could not find secret value for ${name}. This might cause app initialisation to fail.`,
      );
    }

    return secret;
  }
}

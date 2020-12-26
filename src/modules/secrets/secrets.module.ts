import { Module, DynamicModule } from '@nestjs/common';
import { SecretsService } from './secrets/secrets.service';

export interface ISecret {
  name: string;
  value: string;
}

@Module({})
export class SecretsModule {
  static register(secrets_to_retrieve?: string[]): DynamicModule {
    return {
      module: SecretsModule,
      providers: [
        {
          provide: 'preloaded_secrets',
          useFactory: async (): Promise<ISecret[]> => {
            // alternatively you should store all promises here and then await Promise.all([])
            // so you grab them concurrently from wherever
            const secrets_from_vault: ISecret[] = [];

            for (let secret of secrets_to_retrieve) {
              secrets_from_vault.push({
                value: secret + '_value',
                name: secret,
              });
            }

            return secrets_from_vault;
          },
        },
        SecretsService,
      ],
      exports: [SecretsService],
    };
  }
}

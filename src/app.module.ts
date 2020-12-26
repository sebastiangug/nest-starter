import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SecretsModule } from './modules/secrets/secrets.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerModule } from './modules/logger/logger.module';
import { ConfigModule } from './modules/config/config.module';
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [SecretsModule, AuthModule, LoggerModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}

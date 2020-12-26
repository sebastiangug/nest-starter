import { Test, TestingModule } from '@nestjs/testing';
import { AuthImplementationService } from './auth-implementation.service';

describe('AuthImplementationService', () => {
  let service: AuthImplementationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthImplementationService],
    }).compile();

    service = module.get<AuthImplementationService>(AuthImplementationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

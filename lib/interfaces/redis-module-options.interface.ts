import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { RedisOptions } from 'ioredis';

export type RedisModuleOptions = RedisOptions;

export interface RedisModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<RedisOptionsFactory>;
  useExisting?: Type<RedisOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<RedisModuleOptions> | RedisModuleOptions;
}

export interface RedisOptionsFactory {
  createRedisOptions(): Promise<RedisModuleOptions> | RedisModuleOptions;
}

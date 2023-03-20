import { Inject, Injectable, OnApplicationShutdown } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisOptions } from 'ioredis/built/cluster/util';
import { REDIS_CONFIG_OPTS } from './redis.constants';

@Injectable()
export class RedisService implements OnApplicationShutdown {
  public _redisClient: Redis;

  constructor(@Inject(REDIS_CONFIG_OPTS) private redisOptions: RedisOptions) {
    this._redisClient = new Redis(this.redisOptions);
  }

  get client() {
    return this._redisClient;
  }

  onApplicationShutdown(__signal?: string | undefined) {
    this._redisClient.disconnect();
    console.log('Redis Service disconnected');
  }
}

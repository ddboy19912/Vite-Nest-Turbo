import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AppModule } from './app.module';

const expressApp = express();
const adapter = new ExpressAdapter(expressApp);
let initialized = false;

async function bootstrap() {
  if (!initialized) {
    const app = await NestFactory.create(AppModule, adapter, { logger: false });
    app.setGlobalPrefix('api');
    app.enableCors();
    await app.init();
    initialized = true;
  }
}

export default async (req: any, res: any) => {
  await bootstrap();
  expressApp(req, res);
};

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  mongoose.connection.on('connected', () => {
    Logger.log('Connected to MongoDB');
  });
  mongoose.connection.on('error', (err) => {
    Logger.error('MongoDB connection error:', err);
  });
  await app.listen(3000);
}
bootstrap();

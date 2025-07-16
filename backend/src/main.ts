import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));

  const config = new DocumentBuilder()
      .setTitle('Messages API')
      .setDescription('The Messages API description ...')
      .setVersion('1.5')
      .addTag('messages')
      .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

    app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

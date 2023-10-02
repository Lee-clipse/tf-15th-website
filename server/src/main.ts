import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // NestJS log를 winston으로 넘김
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  app.enableCors();

  const swaggerDocumentBuilder = new DocumentBuilder()
    .setTitle('TF API Docs')
    .setDescription('TF API description')
    .setVersion('1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerDocumentBuilder,
  );
  SwaggerModule.setup('swagger', app, swaggerDocument);

  await app.listen(4000);
}
bootstrap();

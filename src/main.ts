import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  await app.listen(5000);
}
bootstrap();

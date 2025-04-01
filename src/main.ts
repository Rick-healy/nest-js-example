import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	// Get port from environment variable or use 8080 as fallback
	const port = process.env.PORT || 8080;
	
	const app = await NestFactory.create(AppModule);
	await app.listen(port);
	
	console.log(`Application is running on port ${port}`);
}

bootstrap();
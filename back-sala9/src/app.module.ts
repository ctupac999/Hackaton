import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PropertyModule,  MongooseModule.forRoot('mongodb+srv://cristian:nest2024@nestjs.e0teljn.mongodb.net/albunesNest6')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

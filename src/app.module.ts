import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AddressModule } from './useCases/address.module';
import { MongooseModule } from '@nestjs/mongoose';
import { addressController } from './controllers/addres.controllers';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://luandev:luandev97056799@si.pcdeb.mongodb.net/test',
    ),
    UsersModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

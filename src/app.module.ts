import { Module } from '@nestjs/common';
import { UsersModule } from './useCases/users/users.module';
import { AddressModule } from './useCases/address/address.module';
import { MongooseModule } from '@nestjs/mongoose';

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

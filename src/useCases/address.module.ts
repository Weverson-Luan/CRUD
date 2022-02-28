/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressService } from '../useCases/address/address.service';
import { addressController } from '../controllers/addres.controllers';
import {
  Address,
  AddressSchema,
} from '../users/entities/domain/address/address.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Address.name, schema: AddressSchema }]),
  ],
  controllers: [addressController],
  providers: [AddressService],
})
export class AddressModule {}

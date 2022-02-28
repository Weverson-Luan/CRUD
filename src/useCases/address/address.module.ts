/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressService } from './address.service';
import { addressController } from '../../controllers/addres.controller';
import {
  Address,
  AddressSchema,
} from '../../domain/entities/address/address.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Address.name, schema: AddressSchema }]),
  ],
  controllers: [addressController],
  providers: [AddressService],
})
export class AddressModule {}

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAddressDto } from '../../core/dtos/create-address.dto';

import {
  Address,
  AddressDocument,
} from '../../users/entities/domain/address/address.entity';

@Injectable()
export class AddresssService {
  constructor(
    @InjectModel(Address.name) private AddressModel: Model<AddressDocument>,
  ) {}
  async create(createAddressDto: CreateAddressDto) {
    const AddressModel = new this.AddressModel(createAddressDto);
    return AddressModel.save();
  }

  findAll() {
    return this.AddressModel.find(); //retorna todos do banco
  }

  remove(id: string) {
    return this.AddressModel.deleteOne({
      _id: id, //id que eu desejo exluir
    }).exec(); //para esse metodo ser executado com exito
  }
}

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAddressDto } from '../../core/dtos/create-address.dto';
import { UpdateAddressDto } from '../../core/dtos/updated-address.dto';

import {
  Address,
  AddressDocument,
} from '../../entities/domain/address/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private AddressModel: Model<AddressDocument>,
  ) {}
  async create(createAddressDto: CreateAddressDto) {
    const AddressModel = new this.AddressModel(createAddressDto);
    return AddressModel.save();
  }

  findAll() {
    return this.AddressModel.find(); //retorna todos endereços do banco
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return this.AddressModel.findByIdAndUpdate(
      {
        _id: id, //buscar pelo ai que vou ta enviado
      },
      {
        $set: updateAddressDto, // atualizar esses dados
      },
      {
        new: true, // pega minhas informação e alterar se não passar o new ele não salvarr suas informções
      },
    );
  }

  remove(id: string) {
    return this.AddressModel.deleteOne({
      _id: id, //id que eu desejo exluir
    }).exec(); //para esse metodo ser executado com exito
  }
}

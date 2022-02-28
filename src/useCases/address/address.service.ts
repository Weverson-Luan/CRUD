import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAddressDto } from '../../core/dtos/create-address.dto';

import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}
  async create(createAddressDto: CreateAddressDto) {
    const userModel = new this.UserModel(createAddressDto);
    return userModel.save();
  }

  findAll() {
    return this.UserModel.find(); //retorna todos do banco
  }

  remove(id: string) {
    return this.UserModel.deleteOne({
      _id: id, //id que eu desejo exluir
    }).exec(); //para esse metodo ser executado com exito
  }
}

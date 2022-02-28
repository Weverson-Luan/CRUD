import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../../core/dtos/users/create-user.dto';
import { UpdateUserDto } from '../../core/dtos/users/update-user.dto';
import { User, UserDocument } from '../../entities/domain/users/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto) {
    const userModel = new this.UserModel(createUserDto);
    return userModel.save();
  }

  findAll() {
    return this.UserModel.find(); //retorna todos do banco
  }

  findOne(id: string) {
    const user = this.UserModel.findById(id); //retorna apenas um usuario especifico do banco

    return `This action returns a #${id} user ${user}`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserModel.findByIdAndUpdate(
      {
        _id: id, //buscar pelo ai que vou ta enviado
      },
      {
        $set: updateUserDto, // atualizar esses dados
      },
      {
        new: true, // pega minhas informação e alterar se não passar o new ele não salvarr suas informções
      },
    );
  }

  remove(id: string) {
    return this.UserModel.deleteOne({
      _id: id, //id que eu desejo exluir
    }).exec(); //para esse metodo ser executado com exito
  }
}

/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from '../dtos/create-address.dto';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}

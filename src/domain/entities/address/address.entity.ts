/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Prop()
  uf: string;

  @Prop()
  zip_code: string;

  @Prop()
  city: string;

  @Prop()
  district: string;

  @Prop()
  street: string;

  @Prop()
  number: number;

  @Prop()
  complement: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);

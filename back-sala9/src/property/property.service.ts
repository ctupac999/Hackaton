import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PropertyService {
  constructor(@InjectModel('Property') private readonly propertyModel: Model<Property>) { }


  // create(createPropertyDto: CreatePropertyDto) {
  //   return 'This action adds a new property';
  // }
  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const propertyCreated = new this.propertyModel(createPropertyDto)
    return await propertyCreated.save();
  }

  async findAll(): Promise<Property[]> {
    const allProperty = await this.propertyModel.find();
    console.log(allProperty);
    return allProperty;
  }

  async buscarPorPalabra(palabra: string): Promise<Property[]> {
    const regex = new RegExp(palabra, 'i'); // 'i' para ignorar mayúsculas y minúsculas
    return this.propertyModel.find({
      $or: [
        { name: regex },
        { releaseDate: regex },
        { meters: regex },
        { description: regex },
        {city:regex}
        // Agrega aquí otros campos que desees buscar
      ],
    }).exec();
  }


  // async findProperty(id: number) : Promise<Property> {
  //   const findProperty = await this.propertyModel.findById(id);
  //   return findProperty
  // }

  // async findPropertyByText(text: string): Promise<Property[]> {
  //   return this.propertyModel
  //     .find({ $text: { $search: text } })
  //     .exec();
  // }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}

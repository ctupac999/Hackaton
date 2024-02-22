import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get('findAll')
  async findAll() {
    const allProperty = await this.propertyService.findAll();
    return allProperty
  }

  @Post('create')
  async create(@Body() createPropertyDto: CreatePropertyDto) {
    const propertyCreated = await this.propertyService.create(createPropertyDto);
    return propertyCreated
  }
  @Get(':id')
  async findProperty(@Param('id') id: number) {
    const findProperty = await this.propertyService.findProperty(id);
    return findProperty
  }

  // @Get()
  // async findProperties(@Query('text') text: string) {
  //   return this.propertyService.findPropertyByText(text);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}

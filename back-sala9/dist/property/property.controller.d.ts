import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    findAll(): Promise<Property[]>;
    create(createPropertyDto: CreatePropertyDto): Promise<Property>;
    findByCity(city: string): Promise<Property[]>;
    findByWord(word: string): Promise<Property[]>;
    update(id: string, updatePropertyDto: UpdatePropertyDto): string;
    remove(id: string): string;
}

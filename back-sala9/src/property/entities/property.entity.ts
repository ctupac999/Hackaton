import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PropertyDocument = HydratedDocument<Property>;
@Schema()
export class Property {
        @Prop({ })
        name: string;
        @Prop({ })
        releaseDate: string;
        @Prop({ required: true })
        bedrooms: number;
        @Prop({ type: {} })
        city: {
                madrid: boolean,
                gijon: boolean,
                barcelona: boolean,
        };
        @Prop({})
        meters: string; 
        @Prop({})
        description: string;   
        @Prop({})
        descriptioncorta: string;   

};

export const PropertySchema = SchemaFactory.createForClass(Property);

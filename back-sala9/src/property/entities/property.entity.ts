import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PropertyDocument = HydratedDocument<Property>;
@Schema()
export class Property {
        @Prop({ })
        name: string;
        @Prop({ })
        releaseDate: string;
        @Prop({})
        bedrooms: number;
        @Prop({ type: Object})
        city: {
                madrid:boolean,
                barcelona:boolean,
                gijon:boolean,
        }
        @Prop({})
        meters: string; 
        @Prop({})
        description: string;
        @Prop({})
        price: string;
        @Prop({})
        img1: string;
        @Prop({})
        img2: string;
        @Prop({})
        img3: string;

};

export const PropertySchema = SchemaFactory.createForClass(Property);

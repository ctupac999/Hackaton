export class CreatePropertyDto {
    name: string;
    releaseDate: string;
    bedrooms: number;
    city: {
        Madrid: boolean,
        Gijon: boolean,
        song3: boolean
    };
    meters: string;
    description: string;
}

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
    price: string;
    img1: string;
    img2: string;
    img3: string;
}

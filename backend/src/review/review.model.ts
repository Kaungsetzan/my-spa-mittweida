import {
    IsLatitude,
    IsLongitude,
    IsNotEmpty,
    IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CommonReview {
    @ApiProperty({ required: true, example: 'Paul' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ required: true, example: 'Great product!' })
    @IsNotEmpty()
    content: string;

    @ApiProperty({ required: false, example: 13.4050 })
    @IsOptional()
    @IsLongitude()
    longitude?: number;

    @ApiProperty({ required: false, example: 52.5200 })
    @IsOptional()
    @IsLatitude()
    latitude?: number;
}

export class Review extends CommonReview {
    @ApiProperty({ example: 'b7a1f44e-d7e2-4dd9-a8b1-5f6e6bbaec15' })
    id: string;
}

export class CreateReview extends CommonReview {}

export class UpdateReview extends CommonReview {}

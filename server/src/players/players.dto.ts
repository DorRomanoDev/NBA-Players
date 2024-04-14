import { IsString, IsOptional, IsNumberString } from 'class-validator';

export class GetPlayerDto {
    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsNumberString()
    per_page?: number;

    @IsOptional()
    @IsNumberString()
    cursor?: number;
}

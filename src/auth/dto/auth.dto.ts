import { IsString, IsNotEmpty } from 'class-validator';

export class RegisterDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

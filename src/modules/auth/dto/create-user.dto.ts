import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, MinLength } from 'class-validator';
import {Role} from '../../../common/guard/role/role.enum'
export class CreateUserDto {
 
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @IsNotEmpty()
  @ApiProperty()
  last_name?: string;

  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'Password should be minimum 8' })
  @ApiProperty()
  password: string;


  @IsPhoneNumber()
  @IsNotEmpty()  
  @ApiProperty({ description: 'Phone number of the user' })
  phone_number: number;

  @IsOptional()
  @IsEnum(Role)
  @ApiProperty({
    type: String,
    example: 'user',
  })
  type?: Role = Role.USER;
}

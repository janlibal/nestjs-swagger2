import { ApiProperty, ApiSchema } from '@nestjs/swagger'
import {
  IsDefined,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator'
import { Transform } from 'class-transformer'
import { lowerCaseTransformer } from 'src/utils/transformers/lower.case.transformer'

@ApiSchema({ name: 'Registration mandatory fields' })
export class AuthRegisterLoginDto {
  @ApiProperty({
    description: 'User firstname',
    example: 'Joe',
    default: 'Joe',
    type: String,
  })
  @IsNotEmpty({ message: 'Firstname cannot be empty' })
  @IsDefined({ message: 'Firstname has to be defined' })
  @IsString({ message: 'Firstname must be a string' })
  @MinLength(1, { message: 'Firstname must be longer than 1 char' })
  readonly firstName: string

  @ApiProperty({
    description: 'User lastname',
    example: 'Doe',
    default: 'Doe',
    type: String,
  })
  @IsNotEmpty({ message: 'Lastname cannot be empty' })
  @IsDefined({ message: 'Lastname has to be defined' })
  @IsString({ message: 'Lastname must be a string' })
  @MinLength(1, { message: 'Lastname must be longer than 1 char' })
  readonly lastName: string

  @ApiProperty({
    description: 'User email',
    example: 'joe.doe@joedoe.com',
    default: 'joe.doe@doedoe.com',
    type: String,
  })
  @Transform(lowerCaseTransformer)
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsString({ message: 'Email must be a string' })
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g, {
    message: 'Email must be in proper format',
  })
  readonly email: string

  @ApiProperty({
    description: 'User password',
    example: 'Password123!',
    default: 'Password123!',
  })
  @IsDefined({ message: 'Password has to be defined' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must contain at least 6 characters' })
  @MaxLength(20, { message: 'Password can contain 20 characters at the most' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  })
  readonly password: string
}

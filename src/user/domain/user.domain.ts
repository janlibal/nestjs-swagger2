import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'
import { isUUID } from 'class-validator'

export class User {
  @ApiProperty({
    type: isUUID,
    description: 'Id is DB generated',
  })
  @Exclude()
  id?: string //= uuid() //number | string

  @ApiProperty({
    type: String,
    example: 'joe.doe@example.com',
  })
  @Expose()
  email: string | null

  @Exclude({ toPlainOnly: true })
  password: string

  @ApiProperty({
    type: String,
    example: 'Joe',
  })
  @Expose()
  firstName: string | null

  @ApiProperty({
    type: String,
    example: 'Doe',
  })
  @Expose()
  lastName: string | null

  @ApiProperty({
    type: String,
    example: 'email',
  })
  @Expose() //({ groups: ['me', 'admin'] })
  provider: string
}

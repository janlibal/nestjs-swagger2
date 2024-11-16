import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'
import { isUUID } from 'class-validator'
import { Role } from 'src/roles/domain/role.domain'
import { Status } from 'src/statuses/domain/status.domain'

export class User {
  @ApiProperty({
    type: isUUID,
    description: 'Id is UUID',
    example: '550e8400-e29b-41d4-a716-44665544000',
  })
  @Exclude()
  id?: string //= uuid() //number | string

  @ApiProperty({
    type: String,
    description: 'User email',
    example: 'joe.doe@joedoe.com',
  })
  @Expose()
  email: string | null

  @Exclude({ toPlainOnly: true })
  password: string

  @ApiProperty({
    type: String,
    description: 'User first',
    example: 'Joe',
  })
  @Expose()
  firstName: string | null

  @ApiProperty({
    type: String,
    description: 'User lastname',
    example: 'Doe',
  })
  @Expose()
  lastName: string | null

  @ApiProperty({
    type: String,
    description: 'Provider',
    example: 'email, apple, facebook, twitter',
  })
  @Expose() //({ groups: ['me', 'admin'] })
  provider: string

  @ApiProperty({
    type: () => Role,
  })
  @Expose({ name: 'roleId' })
  role?: Role | null

  @ApiProperty({
    type: () => Status,
  })
  @Expose({ name: 'statusId' })
  status?: Status
}

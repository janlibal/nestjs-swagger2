import { User } from 'src/users/domain/user.domain'

export type JwtPayloadType = Pick<User, 'id'> & {
  iat: number
  exp: number
}

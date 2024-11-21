import { User } from 'src/users/domain/user.domain'

export type JwtRefreshPayloadType = {
  userId: User['id']
  iat: number
  exp: number
}

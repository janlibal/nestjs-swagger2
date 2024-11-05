import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    public async compileData() {
    const object = {
      status: true,
      path: "/api/v1/auth/email/login",
      statusCode: 200,
      result: {
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjljMzM5NDMxLTRlMmItNGQzOS05NjNlLWE3MTZkODhmNGFmOSIsInNlc3Npb25JZCI6MSwiaWF0IjoxNzMwODA5MTg5LCJleHAiOjE3MzA4MTAwODl9.S0mPthHIIq7AZb5fQLjzztpwupKFHG3s_tPizrRLzeY",
          refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOjEsImhhc2giOiJjNmNjMDg0MDQxMmVkZGE3ZTU1MmY5MDg5ZmM0ODVjODJiMzEzNTQ0ZTY4YjI2NWE1ZWYwYTVhNWRhMDNjMTlhIiwiaWF0IjoxNzMwODA5MTg5LCJleHAiOjIwNDYxNjkxODl9._Ym91uys5J7y8aoJx45-KMneG5iT2OHkkltMCFwGO_I",
          tokenExpires: 1730810089544,
          user: {
              email: "jan.libal@jablibal.com",
              firstName: "Jan",
              lastName: "Libal",
              provider: "email",
              role: 2,
              status: 2
          }
      }
   }
  
   return object
  
  }
}

export type AppConfig = {
  nodeEnv: string
  name: string
  workingDirectory: string
  frontendDomain?: string
  backendDomain: string
  port: number
  dbUrl: string
  apiPrefix: string
  fallbackLanguage: string
  headerLanguage: string
  logLevel: string
  logService: string
  debug: boolean
}

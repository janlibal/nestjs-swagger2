import appConfig from "src/app/config/app.config"

export const configSetup = {
    isGlobal: true,
    load: [appConfig],
    envFilePath: '.env'
}

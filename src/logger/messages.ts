import { ServerResponse } from "http"
import { IncomingMessage } from "http"

export const customSuccessMessage = (
    req: IncomingMessage,
    res: ServerResponse<IncomingMessage>,
    responseTime: number,
  ) => {
    return `[${req.id || '*'}] "${req.method} ${req.url}" ${res.statusCode} - "${req.headers['host']}" "${req.headers['user-agent']}" - ${responseTime} ms`
  }
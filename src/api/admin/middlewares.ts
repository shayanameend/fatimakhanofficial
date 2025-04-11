import { MiddlewareRoute } from "@medusajs/framework";

import { highlightsMiddlewares } from "./highlights/middlewares";

export const adminMiddlewares: MiddlewareRoute[] = [...highlightsMiddlewares];

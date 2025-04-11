import {
  validateAndTransformQuery,
  MiddlewareRoute,
} from "@medusajs/framework";

import { adminHighlightsConfig } from "./query-config";
import { adminGetHighlightsParams } from "./validators";

export const highlightsMiddlewares: MiddlewareRoute[] = [
  {
    method: "GET",
    matcher: "/admin/highlights",
    middlewares: [
      validateAndTransformQuery(
        adminGetHighlightsParams,
        adminHighlightsConfig.list
      ),
    ],
  },
  {
    method: "GET",
    matcher: "/admin/highlights/:id",
    middlewares: [
      // validateAndTransformQuery(null, adminHighlightsConfig.retrieve),
    ],
  },
];

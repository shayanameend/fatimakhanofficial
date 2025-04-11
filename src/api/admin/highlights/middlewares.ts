import {
  validateAndTransformQuery,
  MiddlewareRoute,
} from "@medusajs/framework";

import { adminHighlightsQueryConfig } from "./query-config";
import {
  adminGetHighlightParams,
  adminGetHighlightsParams,
} from "./validators";

export const highlightsMiddlewares: MiddlewareRoute[] = [
  {
    method: "GET",
    matcher: "/admin/highlights",
    middlewares: [
      validateAndTransformQuery(
        adminGetHighlightsParams,
        adminHighlightsQueryConfig.list
      ),
    ],
  },
  {
    method: "GET",
    matcher: "/admin/highlights/:id",
    middlewares: [
      validateAndTransformQuery(
        adminGetHighlightParams,
        adminHighlightsQueryConfig.retrieve
      ),
    ],
  },
];

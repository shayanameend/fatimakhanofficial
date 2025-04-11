import { z } from "zod";

import {
  createFindParams,
  createSelectParams,
} from "@medusajs/medusa/api/utils/validators";

export type AdminGetHighlightsParams = z.infer<typeof adminGetHighlightsParams>;
export const adminGetHighlightsParams = createFindParams({
  offset: 0,
  limit: 50,
});

export type AdminGetHighlightParams = z.infer<typeof adminGetHighlightParams>;
export const adminGetHighlightParams = createSelectParams();

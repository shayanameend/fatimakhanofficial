import { z } from "zod";

import { createFindParams } from "@medusajs/medusa/api/utils/validators";

export const adminGetHighlightsParams = createFindParams({
  offset: 0,
  limit: 50,
});

export type AdminGetHighlightsParams = z.infer<typeof adminGetHighlightsParams>;

import { MedusaService } from "@medusajs/framework/utils";

import { Highlight } from "./models/highlight";

class HighlightModuleService extends MedusaService({
  Highlight,
}) {}

export default HighlightModuleService;

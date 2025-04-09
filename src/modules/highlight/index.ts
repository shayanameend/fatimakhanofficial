import { Module } from "@medusajs/framework/utils";

import HighlightModuleService from "./service";

export const HIGHLIGHT_MODULE = "highlight";

export default Module(HIGHLIGHT_MODULE, {
  service: HighlightModuleService,
});

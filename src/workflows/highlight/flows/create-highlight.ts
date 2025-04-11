import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";

import { CreateHighlightDTO } from "../../../modules/highlight/types";
import { createHighlightStep } from "../steps";

export const createHighlightWorkflow = createWorkflow(
  { name: "create-highlight" },
  (input: CreateHighlightDTO) => {
    const highlight = createHighlightStep(input);

    return new WorkflowResponse(highlight);
  }
);

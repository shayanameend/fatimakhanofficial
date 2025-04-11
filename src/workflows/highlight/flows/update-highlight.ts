import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";

import { UpdateHighlightDTO } from "../../../modules/highlight/types";
import { updateHighlightStep } from "../steps";

export const updateHighlightWorkflow = createWorkflow(
  { name: "update-highlight" },
  (input: UpdateHighlightDTO) => {
    const highlight = updateHighlightStep(input);

    return new WorkflowResponse(highlight);
  }
);

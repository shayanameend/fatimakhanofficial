import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";

import { deleteHighlightStep } from "../steps";

export const deleteHighlightWorkflow = createWorkflow(
  { name: "delete-highlight" },
  (input: string) => {
    const highlight = deleteHighlightStep(input);

    return new WorkflowResponse(highlight);
  }
);

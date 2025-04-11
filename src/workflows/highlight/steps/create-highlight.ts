import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";

import { CreateHighlightDTO } from "../../../modules/highlight/types";
import { HIGHLIGHT_MODULE } from "../../../modules/highlight";

export const createHighlightStep = createStep(
  { name: "create-highlight" },
  async (input: CreateHighlightDTO, { container }) => {
    const highlightService = container.resolve(HIGHLIGHT_MODULE);

    const highlight = await highlightService.createHighlights(input);

    return new StepResponse(highlight, highlight.id);
  },
  async (highlightId, { container }) => {
    if (!highlightId) {
      return;
    }

    const highlightService = container.resolve(HIGHLIGHT_MODULE);

    await highlightService.deleteHighlights(highlightId);
  }
);

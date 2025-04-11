import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";

import { HIGHLIGHT_MODULE } from "../../../modules/highlight";

export const deleteHighlightStep = createStep(
  { name: "delete-highlight" },
  async (highlightId: string, { container }) => {
    const highlightService = container.resolve(HIGHLIGHT_MODULE);

    const preDeleteHighlight = await highlightService.retrieveHighlight(
      highlightId
    );

    await highlightService.deleteHighlights(highlightId);

    return new StepResponse(highlightId, preDeleteHighlight);
  },
  async (highlight, { container }) => {
    if (!highlight) {
      return;
    }

    const highlightService = container.resolve(HIGHLIGHT_MODULE);

    await highlightService.createHighlights(highlight);
  }
);

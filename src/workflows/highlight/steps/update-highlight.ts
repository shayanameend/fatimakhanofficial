import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";

import { UpdateHighlightDTO } from "../../../modules/highlight/types";
import { HIGHLIGHT_MODULE } from "../../../modules/highlight";

export const updateHighlightStep = createStep(
  { name: "update-highlight" },
  async (input: UpdateHighlightDTO, { container }) => {
    const highlightService = container.resolve(HIGHLIGHT_MODULE);

    const preUpdateHighlight = await highlightService.retrieveHighlight(
      input.id
    );

    const highlight = await highlightService.updateHighlights(input);

    return new StepResponse(highlight, preUpdateHighlight);
  },
  async (highlight, { container }) => {
    if (!highlight) {
      return;
    }

    const highlightService = container.resolve(HIGHLIGHT_MODULE);

    await highlightService.updateHighlights(highlight);
  }
);

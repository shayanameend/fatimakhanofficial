import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

  const {
    data: [highlight],
  } = await query.graph({
    entity: "highlight",
    fields: req.queryConfig.fields,
    filters: {
      id: req.params.id,
    },
  });

  res.json({
    highlight,
  });
}

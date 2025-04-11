import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

  const { data: highlights, metadata } = await query.graph({
    entity: "highlight",
    filters: req.filterableFields,
    fields: req.queryConfig.fields,
    pagination: req.queryConfig.pagination,
  });

  res.json({
    highlights,
    count: metadata?.count,
    offset: metadata?.skip,
    limit: metadata?.take,
  });
}

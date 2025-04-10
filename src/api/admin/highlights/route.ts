import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

  const { data: highlights, metadata: { count, take, skip } = {} } =
    await query.graph({
      entity: "highlight",
      fields: req.queryConfig.fields,
      pagination: req.queryConfig.pagination,
    });

  res.json({
    highlights,
    count,
    limit: take,
    offset: skip,
  });
}

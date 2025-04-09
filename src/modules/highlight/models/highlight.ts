import { model } from "@medusajs/framework/utils";

export const Highlight = model.define("highlight", {
  id: model.id().primaryKey(),
  title: model.text(),
  url: model.text(),
});

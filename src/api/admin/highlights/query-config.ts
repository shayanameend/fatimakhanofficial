export const adminHighlightsFields = [
  "id",
  "title",
  "url",
  "created_at",
  "updated_at",
];

export const adminHighlightsQueryConfig = {
  list: {
    defaults: adminHighlightsFields,
    isList: true,
  },
  retrieve: {
    defaults: adminHighlightsFields,
    isList: false,
  },
};

export type CreateHighlightDTO = {
  title: string;
  url: string;
};

export type UpdateHighlightDTO = {
  id: string;
  title?: string;
  url?: string;
};

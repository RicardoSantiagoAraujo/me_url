export type CollectionMetadata = {
    definition: any;
    include: boolean;
    orderBy: string | null;
    sortOrder: "asc" | "desc";
    itemListComponent: string;
  }
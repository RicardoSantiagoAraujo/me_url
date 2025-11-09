export type CollectionMetadata = {
    definition: any;
    include: boolean;
    orderBy: string | null;
    sortOrder: "asc" | "desc";
    itemListComponent: string; // component for list of items page
    itemLayout: string; // layout for item page
  }

  
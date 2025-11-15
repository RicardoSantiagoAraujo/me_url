/**
 * Process collection items by filtering and sorting them based on language and specified criteria.
 *
 * @param items - The collection items to be processed.
 * @param lang - The current language to filter items by.
 * @param orderBy - The field to sort items by (optional).
 * @param sortOrder - The order of sorting: "asc" for ascending, "desc" for descending.
 * @returns
 */
export function proccessCollectionItems(
  items: any,
  lang: string,
  orderBy: string | null,
  sortOrder: "asc" | "desc" = "asc"
) {
  const processedItems = items
    // filter out excluded items
    .filter((item: any) => item.data.include !== false)
    // filter items that match the current language
    .filter((item: any) => item.id.split("/")[0] === lang);

  // Conditionally sort items by a specified field
  const sortedItems = orderBy
    ? [...processedItems].sort((a: any, b: any) => {
        // Access the value of the sortBy property on each item
        const getValue = (obj: any, path: string) =>
          path.split(".").reduce((acc, key) => acc?.[key], obj);

        const aValue = getValue(a, orderBy) ?? "";
        const bValue = getValue(b, orderBy) ?? "";

        // Perform string comparison or fallback to number comparison
        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.localeCompare(bValue);
        }
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      })
    : processedItems;

  // Reverse sort order if sortOrder is "desc"
  const finalItems = sortOrder === "desc" ? sortedItems.reverse() : sortedItems;
  return finalItems;
}

// Functins used to dynamically generate routes for specified collections in Astro.

import { getCollection, render } from "astro:content";
import { collections,collectionsMetadata0 } from "@/content.config.ts";

/**
 * Generates dynamic routes for items in a specified collection.
 *
 * @param collection_name - The name of the collection to generate routes for.
 * @returns An array of route parameters and props for each item.
 */
export async function generateCollectionItemRoutes(
  collection_name: keyof typeof collections
) {
  if (!Object.keys(collectionsMetadata0).includes(collection_name))
  {
    throw `The collection name '**${collection_name}**' is not valid ! Available collections: ${Object.keys(collectionsMetadata0).join(", ")}.`
  }
  let allItems = (await getCollection(collection_name)) as Array<{
    id: string;
    data: { include?: boolean };
  }>; // name of the collection from content.config.ts
  // Filter out excluded items
  allItems = allItems.filter((item) => {
    return item.data.include !== false;
  });
  // Order items
  allItems = allItems.sort((a, b) => {
    return b.id.localeCompare(a.id, undefined, { numeric: true }); // order items: localeCompare works for any string and sorts based on Unicode order.
  });
  const paths = allItems.map((item) => {
    const [lang, ...slug] = item.id.split("/");
    return { params: { lang, slug: slug.join("/") || undefined }, props: item };
  });

  return paths;
}

/**
 * Generates dynamic routes for tags in a specified collection.
 *
 * @param collection_name - The name of the collection to generate tag routes for.
 * @returns An array of route parameters and props for each tag.
 */
export async function generateTagRoute(
  collection_name: keyof typeof collections
) {
  const allItems = await getCollection(collection_name); // name of the collection from content.config.ts

  const filteredTags = [
    ...new Set(
      allItems
        .map((item: any) => item.data.tags)
        .flat()
        .filter((tag) => tag.include !== false)
        .map((tag) => tag.id)
    ),
  ];

  return filteredTags.map((tag) => {
    const filteredItems = allItems.filter((item: any) => {
      let tags = item.data.tags.map((t: any) => t.id);
      return tags.includes(tag);
    });
    return {
      params: { tag },
      props: { items: filteredItems },
    };
  });
}

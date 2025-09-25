// Functins used to dynamically generate routes for specified collections in Astro.

import { getCollection, render } from "astro:content";
import { collections } from "../content.config.ts";
import { object } from "astro:schema";

// Creating a page for each item in a collection, generating dynamic routes.
export async function generateItemRoutes(
  collection_name: keyof typeof collections
) {
  let allItems = await getCollection(collection_name); // name of the collection from content.config.ts
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

// Creating a page for each tag in a collection, filtering items by tags.
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
        .map((tag) => tag.name)
    ),
  ];

  return filteredTags.map((tag) => {
    const filteredItems = allItems.filter((item: any) => {
      let tags = item.data.tags.map((t: any) => t.name);
      return tags.includes(tag);
    });
    return {
      params: { tag },
      props: { items: filteredItems },
    };
  });
}

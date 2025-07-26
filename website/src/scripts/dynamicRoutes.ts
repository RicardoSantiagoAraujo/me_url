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
  allItems = allItems.filter((item)=>{return item.data.include !== false});
  const paths = allItems.map((item) => {
    // console.log(item.data.include);
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
  const uniqueTags = [...new Set(allItems.map((item: any) => item.data.tags).flat())];
  return uniqueTags.map((tag) => {
    console.log("TAG:");
    console.log(tag);
    const filteredItems = allItems.filter((item: any) => item.data.tags.includes(tag));
    console.log("Filtered items:");
    console.log(filteredItems);
    // get string from tag object
    tag = tag.name;
    return {
      params: { tag },
      props: { items: filteredItems },
    };
  });
}

import { ZodType } from "astro:schema";
import { z } from "astro:content";

/**
 * Ensure all items are unique (works on objects (all attributes must match), as well as primitive values like strings)
 * @param schema - ZodType schema to use in array
 * @returns
 */
export function uniqueArray(schema: ZodType<any, any, any>) {
  return z.array(schema).refine(
    (items) => {
      const serializedItems = items.map((item) => JSON.stringify(item)); // to be able to compare objects, not only primitives
      return new Set(serializedItems).size === items.length;
    },
    {
      message:
        "⚠️⚠️⚠️  All items must be unique, no duplicate values allowed !!!",
    }
  );
}

import { ZodType, ZodEffects, ZodEnum } from "astro:schema";
import { z } from "astro:content";
import { generalParametersUser } from "@/data/general.config";
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

/**
 * Get ZodEnum values from specified glossary based on user defined general parameters
 *
 * @param glossary - glossary to get values from
 * @returns
 */
export function valuesFromGlossary(glossary: "tags" | "fields" | "techstack") : ZodEffects<ZodEnum<[string, ...string[]]>, string, string> {
  let values = z.enum(Object.keys(generalParametersUser[glossary]) as [string, ...string[]]);
  // console.log(`Loaded ${values.options.length} values from glossary '${glossary}'`);
  // console.log(`\n\nGlossary: ${glossary}`);
  // console.log(values.options);
  return values.refine(
    (val) => true,
    {
      message: `⚠️⚠️⚠️  DEFAULT VALIDATOR - Please update the 'valuesFromGlossary' function in 'website/src/collectionsConfig/utils/utils.ts' to implement proper validation for glossary '${glossary}' !!!`,
    }
  );
}
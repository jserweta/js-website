/**
 * Sets up the Presentation Resolver API,
 * see https://www.sanity.io/docs/presentation-resolver-api for more information.
 */

import { resolveHref } from "@/sanity/lib/utils";
import { defineLocations } from "sanity/presentation";

export const locations = {
  settings: defineLocations({
    message: "This document is used on all pages",
    tone: "caution",
  }),
  home: defineLocations({
    message: "This document is used to render the front page",
    tone: "positive",
    locations: [{ title: "Home", href: resolveHref("home")! }],
  }),
};

"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { apiVersion, dataset, projectId } from "./src/sanity/lib/env";
import * as resolve from "@/sanity/plugins/resolve";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import settings from "@/sanity/schemas/singletons/settings";
import home from "@/sanity/schemas/singletons/home";
import heroSection from "@/sanity/schemas/homeSections/heroSection";
import aboutSection from "@/sanity/schemas/homeSections/aboutSection";
import sectionHeader from "@/sanity/schemas/objects/sectionHeader";
import iconWithText from "@/sanity/schemas/objects/iconWithText";
import educationSection from "@/sanity/schemas/homeSections/educationSection";
import experienceSection from "@/sanity/schemas/homeSections/experienceSection";
import skillsSection from "@/sanity/schemas/homeSections/skillsSection";
import resumeCTASection from "@/sanity/schemas/homeSections/resumeCTASection";
import contactSection from "@/sanity/schemas/homeSections/contactSection";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemas' folder
  schema: {
    types: [
      // Singletons
      home,
      settings,
      // Documents

      // Objects
      sectionHeader,
      iconWithText,
      // Sections
      heroSection,
      aboutSection,
      educationSection,
      experienceSection,
      skillsSection,
      resumeCTASection,
      contactSection,
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure([home, settings]),
    }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
    singletonPlugin([home.name, settings.name]),
  ],
});

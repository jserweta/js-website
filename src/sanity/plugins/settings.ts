/**
 * This plugin contains all the logic for setting up the singletons
 */

import { type DocumentDefinition } from "sanity";
import { type StructureResolver } from "sanity/structure";
import type { DocumentActionComponent } from "sanity";

export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide singletons from "new document" menu
      newDocumentOptions: (
        prev: any[],
        context: { creationContext: { type: string } },
      ) => {
        if (context.creationContext.type === "global") {
          return prev.filter(
            (templateItem) => !types.includes(templateItem.id),
          );
        }
        return prev;
      },

      // Disable "duplicate" action for singletons
      actions: (
        prev: DocumentActionComponent[],
        context: { schemaType: string },
      ) => {
        if (types.includes(context.schemaType)) {
          return prev.filter((action) => action.action !== "duplicate");
        }
        return prev;
      },
    },
  };
};

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[],
): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name),
        );
    });

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) =>
        !typeDefArray.find((singleton) => singleton.name === listItem.getId()),
    );

    return S.list()
      .title("Content")
      .items([...singletonItems, S.divider(), ...defaultListItems]);
  };
};

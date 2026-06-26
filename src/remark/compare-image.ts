import { visit } from "unist-util-visit";
import type { Plugin } from "unified";

function getText(node: any): string {
  if (!node) {
    return "";
  }

  if (node.type === "text") {
    return node.value;
  }

  if (Array.isArray(node.children)) {
    return node.children.map(getText).join("");
  }

  return "";
}

function getSingleImageUrl(cell: any): string | undefined {
  if (cell.children.length !== 1) {
    return undefined;
  }

  const child = cell.children[0];

  if (child.name !== "img") {
    return undefined;
  }

  return child.attributes.find((attr: any) => attr.name === "src")?.value;
}

const remarkCompare: Plugin = () => {
  return (tree, file) => {
    visit(tree, "heading", (heading: any, index, parent) => {
      if (heading.depth !== 4 || index === undefined || parent === undefined) {
        return;
      }

      let description = getText(heading).trim();

      if (!description.startsWith("compare")) {
        return;
      }

      if (description.startsWith("compare:")) {
        description = description.replace(/^compare:\s*/, "");
      }
      else {
        description = "";
      }

      const table = parent.children[index + 1];

      if (!table || table.type !== "table") {
        return;
      }

      // Header row + one data row
      if (table.children.length !== 2) {
        return;
      }

      const headerRow = table.children[0];
      const dataRow = table.children[1];

      if (headerRow.children.length !== 2 || dataRow.children.length !== 2) {
        return;
      }

      const leftLabel = getText(headerRow.children[0]).trim();
      const rightLabel = getText(headerRow.children[1]).trim();

      const leftImage = getSingleImageUrl(dataRow.children[0]);
      const rightImage = getSingleImageUrl(dataRow.children[1]);

      if (!leftImage || !rightImage) {
        return;
      }

      const compareNode = {
        type: "mdxJsxFlowElement",
        name: "CompareImage",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "description",
            value: description,
          },
          {
            type: "mdxJsxAttribute",
            name: "leftLabel",
            value: leftLabel,
          },
          {
            type: "mdxJsxAttribute",
            name: "rightLabel",
            value: rightLabel,
          },
          {
            type: "mdxJsxAttribute",
            name: "leftImage",
            value: leftImage,
          },
          {
            type: "mdxJsxAttribute",
            name: "rightImage",
            value: rightImage,
          },
        ],
        children: [],
      };

      // Replace heading + table
      parent.children.splice(index, 2, compareNode);
    });
  };
};

export default remarkCompare;

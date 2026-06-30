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

const remarkColorSwatch: Plugin = () => {
  return (tree) => {
    visit(tree, "tableCell", (cell: any) => {
      const text = getText(cell).trim();

      const m = text.match(
        /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
      );

      if (!m) {
        return;
      }

      const rgb = `rgb(${m[1]}, ${m[2]}, ${m[3]})`;

      const swatchNode = {
        type: "mdxJsxTextElement",
        name: "Swatch",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "color",
            value: rgb,
          },
        ],
        children: [],
      };

      const spanNode = {
        type: "mdxJsxTextElement",
        name: "span",
        attributes: [],
        children: [swatchNode, { type: "text", value: " " + text }],
      };

      cell.children = [spanNode];
    });
  };
};

export default remarkColorSwatch;

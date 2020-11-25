import { PARAM_KEY as docsViewId } from "@storybook/addon-docs/dist/shared";

// import React from "react";

// export const decorators = [
//   (Story) => (
//     <div style={{ margin: "3em" }}>
//       <Story />
//     </div>
//   ),
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: docsViewId,
};

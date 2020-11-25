import { addons } from "@storybook/addons";
import antDesignTheme from "./antd-theme";

// https://storybook.js.org/docs/react/configure/features-and-behavior

addons.setConfig({
  // isFullscreen: false,
  // showNav: true,
  // showPanel: false,
  // panelPosition: "bottom",
  // sidebarAnimations: true,
  // enableShortcuts: true,
  // isToolshown: false,
  theme: antDesignTheme,
  selectedPanel: "storybook/docs/panel",
  initialActive: "storybook/docs/panel",
  // showRoots: false,
  previewTabs: {
    // the order of the tabs is configured by the order here
    "storybook/docs/panel": null,
    canvas: null,
  },
});

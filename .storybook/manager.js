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
  // selectedPanel: undefined,
  // initialActive: "sidebar",
  // showRoots: false,
});

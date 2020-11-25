import React, { FunctionComponent, HTMLProps } from "react";

export type BlockProps = HTMLProps<HTMLDivElement> & {
  direction?: "column" | "row";
  width?: number;
};

export const Block: FunctionComponent<BlockProps> = ({
  style = {},
  direction = "row",
  width = "100%",
  ...otherProps
}) => {
  const defaultStyle = {
    display: "flex",
    flexDirection: direction,
    alignItems: "center",
    justifyContent: "space-evenly",
    maxWidth: width,
  };
  return <div style={{ ...defaultStyle, ...style }} {...otherProps} />;
};

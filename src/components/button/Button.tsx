// @docs https://ant.design/components/button/

import AntDesignButton, { ButtonProps as AntDesignButtonProps } from "antd/lib/button";
import React, { FunctionComponent } from "react";
import { applySizeProps, classNames, combineProps, SizeType } from "../../utils";
import "./style/button.less";

type ButtonTypes = AntDesignButtonProps["type"] | "secondary";

export type ButtonProps = Omit<AntDesignButtonProps, "size" | "type"> & {
  size?: SizeType;
  type?: ButtonTypes;
};

export const Button: FunctionComponent<ButtonProps> = ({ size, type, className, ...otherProps }) => {
  return (
    <AntDesignButton
      {...combineProps(
        applySizeProps("ant-btn", { size, className }),
        applyButtonTypeProps("ant-btn", { type, className })
      )}
      {...otherProps}
    />
  );
};

type ButtonTypeProps = {
  className?: string;
  type?: ButtonTypes;
};

type AntdButtonTypeProps = {
  className?: string;
  type?: AntDesignButtonProps["type"];
};

const applyButtonTypeProps = (prefix: string, { className, type }: ButtonTypeProps): AntdButtonTypeProps => {
  switch (type) {
    case "secondary":
      return { className: classNames(className, `${prefix}-secondary`) };
    default:
      return { type };
  }
};

type AnyProps = Record<string, any>;

export const classNames = (...values: (string | boolean | undefined)[]): string =>
  values.filter(Boolean).join(" ");

export const combineProps = (...arrayOfProps: AnyProps[]) =>
  arrayOfProps.reduce<AnyProps>((propsSoFar, props) => {
    const { className, ...otherProps } = props;
    propsSoFar.className = classNames(propsSoFar.className, className);
    return Object.assign(propsSoFar, otherProps);
  }, {});

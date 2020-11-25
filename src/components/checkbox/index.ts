import { Checkbox as BaseCheckbox } from "./Checkbox";
import { CheckboxButton } from "./CheckboxButton";
import { CheckboxGroup } from "./CheckboxGroup";

export * from "./Checkbox";
export * from "./CheckboxButton";
export * from "./CheckboxGroup";

export const Checkbox = Object.assign(BaseCheckbox, {
  Button: CheckboxButton,
  Group: CheckboxGroup,
});

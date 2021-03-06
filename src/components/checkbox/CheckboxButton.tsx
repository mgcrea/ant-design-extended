// @docs https://ant.design/components/checkbox/
// @source https://github.com/ant-design/ant-design/tree/master/components/checkbox
import React, {FunctionComponent} from 'react';
import {classNames} from 'src/utils';
import {Checkbox, CheckboxProps} from './Checkbox';
import './style/checkbox-button.less';

export type CheckboxButtonProps = CheckboxProps;

export const CheckboxButton: FunctionComponent<CheckboxButtonProps> = ({className, ...otherProps}) => {
  return <Checkbox className={classNames(className, 'ant-checkbox-button-wrapper')} {...otherProps} />;
};

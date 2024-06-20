import React from "react";

import {
  MbxUiReactiveComponent,
  RadioButtonGroupProps,
  RadioElement,
} from "../../../types";

import Label from "../../atoms/Label";
import RadioButton from "../../atoms/RadioButton";

const radioButtonGroupComponent: MbxUiReactiveComponent<
  number,
  RadioButtonGroupProps
> = ({
  value,
  setValue,
  buttons = [],
  elementClassName = "",
  dark,
  radioProps = {},
  onChange = () => {},
  defaultPosition = "left",
  disabled,
}) => {
  return buttons.map((element, index) => (
    <div
      className={elementClassName}
      data-mbx-text-position={element.textPosition || defaultPosition}
      data-mbx-class="radio-group-element"
      key={"radio_group_element_" + index}
    >
      {element.text && (
        <Label
          disabled={disabled}
          key="radio_text"
          additionalProps={{
            "data-mbx-class": "radio-text",
          }}
          dark={dark}
        >
          {element.text}
        </Label>
      )}
      {element.component}
      <RadioButton
        disabled={disabled}
        deselectable={false}
        additionalProps={{ "data-mbx-test": "radio_component_" + index }}
        key="radio_component"
        value={value === index}
        onChange={() => {
          onChange(index);
          setValue(index);
        }}
        {...radioProps}
        {...(element.props || {})}
      />
    </div>
  ));
};

export default radioButtonGroupComponent;

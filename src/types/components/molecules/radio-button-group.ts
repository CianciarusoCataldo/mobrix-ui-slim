import {
  CommonProps,
  ComponentWithCallback,
  ComponentWithValue,
  MbxUiComponent,
} from "../../../types/global";
import { RadioButtonProps } from "../atoms";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} RadioButtonGroup element
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/RadioButtonGroup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type RadioElement = {
  /** Radio button text */
  text?: string;

  /** Radio button custom component */
  component?: JSX.Element;

  /** Radio button text position */
  textPosition?: "top" | "bottom" | "left" | "right";

  /** Radio button custom props */
  props?: RadioButtonProps & CommonProps;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} RadioButtonGroup props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/RadioButtonGroup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type RadioButtonGroupProps = ComponentWithCallback<number> &
  ComponentWithValue<number> & {
    /** Radio elements array. Every element UI can be driven with attributes.
     * A radio element can contain 3 fields:
     * - `component`: custom component rendered before radio button
     * - `text`: custom radio text showed near the radio button
     * - `textPosition`: custom text position
     * - `props`: custom props applied on the RadioButton component
     */
    buttons?: RadioElement[];

    /** Classname applied on every radio element */
    elementClassName?: string;

    /** if `true`, radio buttons are displayed horizontally, in a single row (default `false`, the radio buttons are displayed vertically) */
    horizontal?: boolean;

    /** Default text position for RadioButton elements (when `textPosition` is not provided) */
    defaultPosition?: RadioElement["textPosition"];

    /** RadioButton props applied on every RadioButton element */
    radioProps?: RadioButtonProps & CommonProps;
  };

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} RadioButtonGroup component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/RadioButtonGroup
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type RadioButtonGroupComponent =
  MbxUiComponent<RadioButtonGroupProps>;

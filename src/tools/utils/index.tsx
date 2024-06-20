import "../styles/core/index.css";
import "../styles/components/index.css";
//import "../styles/themes/full/index.css";

import React, { useEffect, useRef } from "react";

import {
  BuilderComponent,
  BuilderProps,
  BuilderPropsReactive,
  CommonProps,
} from "../../types/global";

import { DEFAULT_COMMON_PROPS } from "./constants";

/* istanbul ignore next */
const useOutsideAlerter = (ref: any, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

export const generateElementsArray = (
  components: { condition: boolean; component: BuilderComponent }[]
) =>
  components
    .filter((component) => component.condition)
    .map((component, index) => component.component);

export const parseCommonProps = (props: CommonProps): CommonProps => ({
  ...DEFAULT_COMMON_PROPS,
  ...props,
  ...(props.unstyled && {
    shadow: false,
    background: false,
    animated: false,
    hover: false,
  }),
});
/**
 * Build a standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component, providing shared functionalities and props, to optimize the process.
 *
 * @param name component name
 * @param Component component to render
 * @param commonProps {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#shared-properties shared MoBrix-ui properties}
 * @param additionalProps additional props applied on rendered component
 * @param wrapper component external wrapper (like `button`, `a` or `p`, if not set will be `div`)
 *
 * @returns built component, ready to be rendered
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=components-building-process
 * @see https://github.com/CianciarusoCataldo/mobrix-ui-tools/
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
const buildMobrixUiStandardComponent = ({
  name,
  Component,
  /* istanbul ignore next */
  commonProps = {},
  wrapper: SelectedWrapper = "div",
}: BuilderProps) => {
  let props: CommonProps & Record<string, any> = {
    "data-mbx-id": name,
    "data-mbx-dark": !!commonProps.dark,
    "data-mbx-shadow": !!commonProps.shadow,
    "data-mbx-animated": commonProps.animated && !commonProps.disabled,
    ...(commonProps.animation &&
      commonProps.animated && {
        "data-mbx-animation": commonProps.animation,
      }),
    "data-mbx-hide": commonProps.hide,
    "data-mbx-a11y": commonProps.a11y,
    "data-mbx-background": commonProps.background,
    "data-mbx-hover": commonProps.hover && !commonProps.disabled,
    "data-mbx-enabled": !commonProps.disabled,
    "data-mbx-a11y-dark":
      commonProps.a11y &&
      (commonProps.a11yDark !== undefined
        ? commonProps.a11yDark
        : commonProps.dark),
    id: commonProps.id,
    "aria-label": commonProps.a11y ? commonProps.a11yLabel : "",
    tabIndex: commonProps.a11y ? "0" : "-1",
    className: commonProps.className,
    style: commonProps.style,
    onFocus: commonProps.onFocus,
    onKeyDown: commonProps.onKeyDown,
    ...commonProps.additionalProps,
  };

  const wrapperRef = useRef(null);
  commonProps.onFocusLost &&
    useOutsideAlerter(wrapperRef, commonProps.onFocusLost);

  if (SelectedWrapper === "input") {
    return (
      <SelectedWrapper ref={wrapperRef} {...props} key={commonProps.key} />
    );
  } else {
    return (
      // prettier-ignore
      <SelectedWrapper ref={wrapperRef} {...props} key={commonProps.key}>
        {Component}
      </SelectedWrapper>
    );
  }
};

/**
 * Build a reactive {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component, with some extra functionalities.
 *
 * @returns built component, ready to be rendered, enhanced with some functionalities
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=reactive-components
 * @see https://github.com/CianciarusoCataldo/mobrix-ui-tools/
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
// prettier-ignore
const buildMbxUiReactiveComponent = <T=any>({
  name,
  wrapper,
  commonProps,
  defaultValue,
  inputValue,
  props,
  Component,
}: BuilderProps<
  (props: {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
  }) => BuilderProps["Component"]
> & {
  inputValue?: T;
  defaultValue: T;
  props?: (
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>
  ) => Omit<BuilderProps, "name">;
}) => {
  const [value, setValue] = React.useState<T>(inputValue || defaultValue);

  const processedProps = props ? props(value, setValue) : {};

  /* istanbul ignore next */
  React.useEffect(() => {
    if (
      inputValue !== undefined &&
      inputValue !== null &&
      value !== inputValue
    ) {
      setValue(inputValue);
    }
  }, [JSON.stringify(inputValue)]);

  return buildMobrixUiStandardComponent({
    name,
    commonProps,
    Component: Component && Component({ value, setValue }),
    wrapper,
    ...processedProps,
  });
};

export const buildMbxStandardComponent: (
  props: CommonProps,
  callback: (props: CommonProps) => BuilderProps
) => React.JSX.Element = (
  /* istanbul ignore next */
  commonProps,
  callback
) => {
  const inputCommonProps = parseCommonProps(commonProps);

  const builderProps = callback(inputCommonProps);

  return buildMobrixUiStandardComponent({
    commonProps: inputCommonProps,
    ...builderProps,
  });
};

// prettier-ignore
export const buildMbxReactiveComponent = <T=any>(
  sharedProps: CommonProps,
  callback: (props:CommonProps) => BuilderPropsReactive<T>
) => {
  const inputCommonProps = parseCommonProps(sharedProps);

  const builderProps = callback(inputCommonProps);

  return buildMbxUiReactiveComponent<T>({
    commonProps: inputCommonProps,
    ...builderProps,
  });
};

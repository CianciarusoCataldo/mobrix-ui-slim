import "./styles.css";

import { CalendarComponent, CalendarDate, DeepPartial } from "../../../types";

import { today } from "./utils";

import calendarComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
 * A ready to use Calendar, designed to be used in many scenarios.
 *
 * @param {CalendarDate} value Actual selected date
 * @param {boolean} hideArrows If `true`, hide arrow buttons near the date label
 * @param {string[]} days Custom days labels
 * @param {string[]} months Custom months labels
 * @param {(date: CalendarDate) => void} onViewChange Callback triggered when the Calendar view (the displayed month) is changed
 * @param {number} startYear Initial displayed year
 * @param {number} startMonth Initial displayed month
 * @param {boolean} fromToday If `false`, prevent the user to select a date lower than today date
 * @param {string} dayLabel Show/hide actual day label on top of the calendar
 * @param {string} labelClassName Custom className applied on the day label component
 * @param {Record<string, any>} labelProps Custom props applied on the day label component
 * @param {(newValue: CalendarDate) => void} onChange Callback triggered when Calendar component input value is changed by the user
 * @param {string} key - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - React key, the standard [key parameter](https://reactjs.org/docs/lists-and-keys.html)
 * @param {string} className - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - custom className applied on main container
 * @param {boolean} dark - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable dark mode
 * @param {boolean} hide - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Hide/show component
 * @param {string} id - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - [id parameter](https://www.w3schools.com/html/html_id.asp) (for styling/testing purpose, to easily find the component into the DOM)
 * @param {boolean} shadow - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable shadow behind component
 * @param {CSSProperties} style - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Css inline properties applied on main container
 * @param {boolean} unstyled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `true`, no standard MoBrix-ui styles will be applied on the components (useful for example, with image buttons)
 * @param {boolean} animated - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component animations
 * @param {'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-top' | 'shake'} animation - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If `animated`=`true`, this parameter specifies which animation is used when component is rendered
 * @param {boolean} background - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component background
 * @param {boolean} hover - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Enable/disable component hover standard styles
 * @param {boolean} disabled - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - If true, disable the component. The effect may vary depending on the component type
 * @param {Record<string, any>} additionalProps - {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=shared-properties shared MoBrix-ui property} - Custom additional properties, applied to the component
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/organisms/Calendar
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs
 *
 * @since 2.0.0
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2024 Cataldo Cianciaruso
 */
const Calendar: CalendarComponent = ({ value: inputValue, ...props }) => {
  const todayDate = today();

  return buildMbxReactiveComponent<DeepPartial<CalendarDate>>(
    props,
    (sharedProps) => ({
      name: "calendar",
      commonProps: { ...sharedProps, shadow: false },
      inputValue,
      defaultValue: {
        year: todayDate.year,
        month: todayDate.month,
        day: todayDate.dayOfTheMonth,
      },
      Component: ({ value, setValue }) =>
        calendarComponent({
          today: todayDate,
          value,
          setValue,
          ...props,
          ...sharedProps,
        }),
    }),
  );
};

export default Calendar;

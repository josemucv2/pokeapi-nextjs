import { MouseEventHandler } from "react";

/**
 * Props for a button component
 * @interface ButtonPropsType
 */
export interface ButtonPropsType {

    /** Click event handler for the button */
    onClick: MouseEventHandler<HTMLButtonElement>;

    /** The content to display within the button */
    content: string;

    /** Flag to indicate if the button is in a loading state */
    loading?: boolean;

    /** Flag to disable the button */
    disabled?: boolean;

    /** Text to display when the button is in a loading state */
    textLoading?: string;

    /** The type of the button (e.g., 'submit', 'reset', 'button') */
    type?: string;

    /** Flag to display an outline style for the button */
    outline?: Boolean;

    /** The type of outline for the button (e.g., 'primary', 'secondary', 'tertiary') */
    outlineTye?: string;

    /** State of the button (e.g., 'active', 'inactive', 'disabled') */
    stateButton?: string;

    /** Icon displayed on the right side of the button */
    iconRight?: string;

    /** Icon displayed on the left side of the button */
    iconLeft?: string;
}

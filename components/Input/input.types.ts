import { ChangeEvent } from "react";

export type InputPropsType = {

    name: string;

    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

    value: string;

    labelTop?: string;

    labelBotton?: string;

    placeholder?: string;

    type?: 'text' | 'password';

    errorMsg?: string;

    toolTip?: string;
}
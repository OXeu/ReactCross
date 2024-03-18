import { BaseProps, TextView } from "../index";
import { ColumnLayout } from "../layout/container";

export interface ButtonProps extends BaseProps {
    children?: string | number;
}

export function ButtonView(props: ButtonProps) {
    return (
        <ColumnLayout {...props}
            className={"select-none px-8 py-4 bg-blue-500 rounded-xl hover:bg-blue-600 active:scale-[0.98] " + props.className}>
            <TextView className="text-white">
                {props.children}
            </TextView>
        </ColumnLayout>
    )
}
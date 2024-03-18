import { BaseProps, Elements } from "../wrappers/base";
import { Container } from "../wrappers/factory";

export interface ColumnProps extends BaseProps {
    children?: Elements;
    style?: object;
}

export interface RowProps extends BaseProps {
    children?: Elements;
    style?: object;
}

export function ColumnLayout(props: ColumnProps) {
    return (
        <Container  {...props} className={"flex flex-col " + props.className} />
    )
}

export function RowLayout(props: RowProps) {
    return (
        <Container  {...props} className={"flex flex-row " + props.className} />
    )
}
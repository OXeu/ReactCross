import { getComponentFactory } from "..";

export function QButton(props: { children: string }) {
    const { QText } = getComponentFactory();
    return (
        <QText className="px-8 py-4 rounded-xl bg-blue-500 text-white hover:bg-blue-600">
            {props.children}
        </QText>
    )
}
import { getComponentFactory } from "..";

export function QButton(props: { children: string }) {
    const { QText, QColumn } = getComponentFactory();
    return (
        <QColumn className="px-8 py-4 bg-blue-500 rounded-xl hover:bg-blue-600">
            <QText className="text-white">
                {props.children}
            </QText>
        </QColumn>
    )
}
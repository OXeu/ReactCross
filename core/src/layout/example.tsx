import { getComponentFactory } from "..";
import { QButton } from "../component/button";
export function Demo() {
    const { QText, QColumn, QRow } = getComponentFactory();
    return (
        <>
            <QColumn className="h-screen bg-white w-scre flex flex-col justify-center items-center gap-y-8">
                <QText className="text-xl font-black text-black">React Multiplatform Framework</QText>
                <QButton>Button</QButton>
            </QColumn>
        </>
    )
}
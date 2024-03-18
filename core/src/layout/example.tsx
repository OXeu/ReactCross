import { useState } from "react";
import { TextView, getComponentFactory } from "..";
import { ButtonView } from "../component/button";
import { ColumnLayout } from "./container";
export function Demo() {
    const [counter, dispatcher] = useState(0);
    function onClick() {
        dispatcher(counter + 1);
    }
    return (
        <>
            <ColumnLayout className="h-screen bg-white w-scre justify-center items-center gap-y-8">
                <TextView className="text-xl font-black text-black">React Multiplatform Framework</TextView>
                <ButtonView onClick={onClick}>Count +1</ButtonView>
                <TextView className="text-xl text-black">
                    {counter}
                    </TextView>
            </ColumnLayout>
        </>
    )
}
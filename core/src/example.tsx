import { useState } from "react";
import { Container, ImageView, TextView, getComponentFactory } from ".";
import { ButtonView } from "./component/button";
import { ColumnLayout } from "./layout/container";
export function Demo() {
    const [counter, dispatcher] = useState(0);
    function onClick() {
        dispatcher(counter + 1);
    }
    return (
        <>
            <ColumnLayout className="h-screen bg-white w-scre justify-center items-center gap-y-8">
                <Container className="rounded-full p-8 border-4 border-gray-100">
                    <ImageView className="h-24 w-24"
                        source="https://avatars.githubusercontent.com/u/8073014" />
                </Container>
                <TextView className="text-xl font-black text-black">React Multiplatform Framework</TextView>
                <ButtonView onClick={onClick}>Count +1</ButtonView>
                <TextView className="text-xl text-black">
                    {counter}
                </TextView>
            </ColumnLayout>
        </>
    )
}
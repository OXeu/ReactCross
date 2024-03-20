import { useState } from "react";
import { ButtonView } from "./component/button";
import { ColumnLayout, RowLayout } from "./layout/container";
import { Container, createRouteView, ImageView, TextView } from "./wrappers/factory";
import { Navigator } from "./wrappers/navigation";

function Example({ navigation }: { navigation: Navigator }) {
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
                <RowLayout className="gap-x-8 items-center">
                    <ButtonView onClick={() => dispatcher(counter - 1)}>-1</ButtonView>
                    <TextView className="text-xl text-black">
                        {counter}
                    </TextView>
                    <ButtonView onClick={onClick}>+1</ButtonView>
                </RowLayout>
                <ButtonView onClick={() => navigation.navigate("about")}>Jump to About</ButtonView>
            </ColumnLayout>
        </>
    )
}

function About({ navigation }: { navigation: Navigator }) {
    return (
        <>
            <ColumnLayout className="h-screen bg-white justify-center items-center gap-y-8">
                <Container className="rounded-full p-8 border-4 border-gray-100">
                    <ImageView className="h-24 w-24"
                        source="https://avatars.githubusercontent.com/u/8073014" />
                </Container>
                <ColumnLayout className="justify-center items-center gap-y-4">

                    <TextView className="text-xl font-black text-black">React Multiplatform Framework</TextView>
                    <TextView className="text-sm text-gray-500">
                        Build native experience app on each platform with React.
                    </TextView>
                    <TextView className="text-sm text-gray-500">
                        🚀Write once, run everywhere.
                    </TextView>
                </ColumnLayout>
                <ButtonView onClick={() => navigation.pop()}>Jump Back</ButtonView>
            </ColumnLayout>
        </>
    )
}

export function RouteView() {
    return createRouteView(
        "Home",
        [
            {
                path: "/",
                name: "home",
                element: Example
            },
            {
                path: "/About",
                name: "about",
                element: About
            }
        ]
    );
}
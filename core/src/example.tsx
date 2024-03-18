import { useState } from "react";
import { ButtonView } from "./component/button";
import { ColumnLayout, RowLayout } from "./layout/container";
import { Container, ImageView, Navigate, TextView, createRouteView } from "./wrappers/factory";
function Example() {
    const [counter, dispatcher] = useState(0);
    const [jumpToAbout, setJump] = useState(false);
    function onClick() {
        dispatcher(counter + 1);
    }
    return (
        <>
            {jumpToAbout && <Navigate to="/about" replace={jumpToAbout} />}
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
                <ButtonView onClick={() => setJump(true)}>Jump to About</ButtonView>
            </ColumnLayout>
        </>
    )
}

function About() {
    const [counter, dispatcher] = useState(0);
    const [jumpBack, setJump] = useState(false);
    function onClick() {
        dispatcher(counter + 1);
    }
    return (
        <>
            {jumpBack && <Navigate to="/" replace={jumpBack} />}
            <ColumnLayout className="h-screen bg-white w-scre justify-center items-center gap-y-8">
                <Container className="rounded-full p-8 border-4 border-gray-100">
                    <ImageView className="h-24 w-24"
                        source="https://avatars.githubusercontent.com/u/8073014" />
                </Container>
                <TextView className="text-xl font-black text-black">React Multiplatform Framework</TextView>
                <TextView className="text-xl text-black">
                    Build native experience app on each platform with React.
                </TextView>
                <TextView className="text-xl text-black">
                    🚀Write once, run everywhere.
                </TextView>
                <ButtonView onClick={() => setJump(true)}>Jump Back</ButtonView>
            </ColumnLayout>
        </>
    )
}

export function RouteView() {
    return createRouteView([{
        path: "/",
        element: <Example />,
        children: [
        ]
    },
    {
        path: "/about",
        element: (<About />)
    }]);
}
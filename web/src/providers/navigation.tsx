import { Navigator, RouteProps } from "@thankrain/cross-core";
import { ComponentType } from "react";
import { NavigateFunction, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
export function RouteProvider(_: string, routes: RouteProps[]) {
    const router = routes.map((route) => {
        return {
            path: route.path ?? "/",
            element: (
                <NavEnv children={route.element} />
            )
        }
    });
    const route = createBrowserRouter(router);
    return (
        <RouterProvider router={route}>
        </RouterProvider>
    )
}



class NavigatorImpl implements Navigator {
    navigation: NavigateFunction;
    constructor(navigation: NavigateFunction) {
        this.navigation = navigation;
    }

    navigate(dest: string) {
        this.navigation(dest);
    };
    replace(dest: string) {
        this.navigation(dest, { replace: true });
    };
    pop(): void {
        this.navigation(-1);
    }

    popToTop(): void {
        this.navigation(-1);
    }
}

interface NavEnvProps {
    children: ComponentType<any>;
}

export function NavEnv(props: NavEnvProps) {
    const navigation = useNavigate();
    return (
        <><props.children navigation={new NavigatorImpl(navigation)} /></>
    )
}
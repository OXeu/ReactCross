import { ContainerProps, ImageProps, TextProps } from "./base";
import { NavigateProps, RouteProps } from "./navigation";

export interface ComponentFactory {
    TextView: (props: TextProps) => JSX.Element;
    ImageView: (props: ImageProps) => JSX.Element;
    Container: (props: ContainerProps) => JSX.Element;
    createRouteView: (routes: RouteProps[]) => JSX.Element;
    Navigate: (props: NavigateProps) => JSX.Element;
}

let factory: ComponentFactory;

export function setComponentFactory(f: ComponentFactory) {
    if (!factory) {
        factory = f;
    }
}

// export all the functions from the factory

export const TextView = (props: TextProps) => factory.TextView(props);

export const ImageView = (props: ImageProps) => factory.ImageView(props);

export const Container = (props: ContainerProps) => factory.Container(props);

export const createRouteView = (props: RouteProps[]) => factory.createRouteView(props);

export const Navigate = (props: NavigateProps) => factory.Navigate(props);
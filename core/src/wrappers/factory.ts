import { ContainerProps, ImageProps, TextProps } from "./base";
import { RouteProps } from "./navigation";

export interface ComponentFactory {
    TextView: (props: TextProps) => JSX.Element;
    ImageView: (props: ImageProps) => JSX.Element;
    Container: (props: ContainerProps) => JSX.Element;
    Navigation: (props: RouteProps) => JSX.Element;
}

let factory: ComponentFactory;

export function setComponentFactory(f: ComponentFactory) {
    factory = f;
}

// export all the functions from the factory

export const TextView = (props: TextProps) => factory.TextView(props);

export const ImageView = (props: ImageProps) => factory.ImageView(props);

export const Container = (props: ContainerProps) => factory.Container(props);

export const Navigation = (props: RouteProps) => factory.Navigation(props);
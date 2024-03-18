export type Elements = JSX.Element[] | JSX.Element;

export interface BaseProps {
    style?: object;
    className?: string;
    onClick?: () => void;
}

export interface TextProps extends BaseProps {
    children?: string | number;
    style?: object;
}

export interface ImageProps extends BaseProps {
    source: string;
    style?: object;
}

export interface ContainerProps extends BaseProps {
    children?: Elements;
    style?: object;
}

export interface ComponentFactory {
    TextView: (props: TextProps) => JSX.Element;
    ImageView: (props: ImageProps) => JSX.Element;
    Container: (props: ContainerProps) => JSX.Element;
}

let factory: ComponentFactory;

export function setComponentFactory(f: ComponentFactory) {
    factory = f;
}

export function getComponentFactory(): ComponentFactory {
    if (!factory) {
        throw new Error('Component factory not set');
    }
    console.log('factory', "Get component factory");
    return factory;
}

export function TextView(props: TextProps) {
    return factory.TextView(props);
}

export function ImageView(props: ImageProps) {
    return factory.ImageView(props);
}

export function Container(props: ContainerProps) {
    return factory.Container(props);
}
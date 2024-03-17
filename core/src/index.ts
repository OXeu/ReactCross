type Elements = JSX.Element[] | JSX.Element;

export interface BaseProps {
    style?: object;
    className?: string;
}
export interface TextProps extends BaseProps {
    children: string;
    style?: object;
}

export interface ImageProps extends BaseProps {
    source: string;
    style?: object;
}

export interface BoxProps extends BaseProps {
    children?: Elements;
    style?: object;
}

export interface ColumnProps extends BaseProps {
    children?: Elements;
    style?: object;
}

export interface RowProps extends BaseProps {
    children?: Elements;
    style?: object;
}

export interface ComponentFactory {
    QText: (props: TextProps) => JSX.Element;
    QImage: (props: ImageProps) => JSX.Element;
    QBox: (props: BoxProps) => JSX.Element;
    QColumn: (props: ColumnProps) => JSX.Element;
    QRow: (props: RowProps) => JSX.Element;
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

export { Demo } from './layout/example';

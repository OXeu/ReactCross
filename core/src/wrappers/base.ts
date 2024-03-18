export type Elements = JSX.Element[] | JSX.Element;

export interface BaseProps {
    style?: object;
    className?: string;
    onClick?: () => void;
}

export interface TextProps extends BaseProps {
    children?: string | number | JSX.Element | JSX.Element[] | null;
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

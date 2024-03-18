export interface RouteProps {
    element?: JSX.Element;
    path?: string;
    name?: string;
    options?: object;
    children?: RouteProps[];
}

export interface NavigateProps {
    to: string;
    replace?: boolean;
}
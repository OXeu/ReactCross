export interface RouteProps {
    element?: JSX.Element;
    path?: string;
    name?: string;
    action?: () => void;
    options?: object;
}
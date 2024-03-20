import {ComponentType} from "react";

export interface RouteProps {
    element: ComponentType<any>;
    path?: string;
    name?: string;
    options?: object;
}

export interface NavigateProps {
    to: string;
    replace?: boolean;
}

export interface Navigator {
    navigate: (dest: string) => void;
    pop: () => void;
    popToTop: () => void;
    replace: (dest: string) => void;
}
import { RouteProps } from "@thankrain/cross-core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export function RouteProvider(routes: RouteProps[]) {
    const route = createBrowserRouter(routes);
    return (<RouterProvider router={route} />)
}
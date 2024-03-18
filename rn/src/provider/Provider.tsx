import { RouteProps } from "@thankrain/cross-core";
import { ContainerProps, ImageProps } from "@thankrain/cross-core/dist/wrappers/base";
import { Image, Pressable, View } from "react-native";
import { RouterProvider, createMemoryRouter } from "react-router-native";

export function ImageProvider(props: ImageProps) {
    const { source, ...rest } = props;
    return (
        <Image {...rest} source={{ uri: props.source }} />
    );
}

export function ContainerProvider(props: ContainerProps) {
    const { onClick, ...rest } = props;
    if (onClick) {
        return (
            <Pressable {...rest} onPress={onClick} />
        );
    }
    return (
        <View {...props} />
    );
}

export function NavigationProvider(props: RouteProps[]) {
    const route = createMemoryRouter(props);
    return (<RouterProvider router={route} />)
}
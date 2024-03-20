import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigator, RouteProps } from "@thankrain/cross-core";
import { ContainerProps, ImageProps } from "@thankrain/cross-core/dist/wrappers/base";
import { Image, Pressable, View } from "react-native";

const Stack = createNativeStackNavigator();

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

export function NavigationProvider(initialRouteName: string, props: RouteProps[]) {
    const route = props.map((route) => {
        var option = route.options ?? { headerShown: false };
        return <Stack.Screen name={route.name ?? "Screen"} key={route.name} options={option}>
            {(props) => {
                const navigation = new NavigatorImpl(props.navigation);
                return (<route.element navigation={navigation} />)
            }}
        </Stack.Screen>
    });
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName}>
                {route}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

class NavigatorImpl implements Navigator {
    navigation: any;
    constructor(navigation: any) {
        this.navigation = navigation;
    }

    pop(): void {
        this.navigation.goBack();
    }

    popToTop(): void {
        this.navigation.popToTop();
    }

    navigate(dest: string): void {
        this.navigation.navigate(dest);
    }

    replace(dest: string): void {
        this.navigation.replace(dest);
    }
}
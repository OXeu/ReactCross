import { ImageProps } from "@thankrain/cross-core/dist/wrappers/base";

export function ImageProvider(props: ImageProps) {
    const { source, ...rest } = props;
    return (
        <img {...rest} src={source} />
    );
}
import { ImageProps } from "@thankrain/cross-core";

export function ImageProvider(props: ImageProps) {
    const { source, ...rest } = props;
    return (
        <img {...rest} src={source} />
    );
}
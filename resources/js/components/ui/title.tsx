import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Title = (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
        <h1
            className={cn("font-space-grotesk text-4xl font-semibold leading-13 lg:text-6xl text-black-renovacom lg:leading-20 uppercase", className)}
            {...rest}
        >
            {props.children}
        </h1>
    )
}

export default Title;
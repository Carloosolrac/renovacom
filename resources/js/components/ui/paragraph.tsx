import { cn } from "@/lib/utils"

const Paragraph = (props: React.HTMLAttributes<HTMLParagraphElement>) =>{
    const {className, ...rest} = props;
    return (
        <p className={cn(`text-black-renovacom text-lg lg:text-xl leading-7 lg:leading-9 font-space-grotesk`, className)} {...rest}>
            {props.children}
        </p>
    )
}

export default Paragraph;
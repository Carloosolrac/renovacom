import { Children, cloneElement, type DetailedHTMLProps, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils";
import { getWidthClasses } from "@/utils/utils";
import type { CardAccordeonProps } from "./card-accordeon";

const CardAccordeonContainer = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) =>{
    return (
        <div className={cn(props.className,"gap-4 flex lg:flex-row flex-col items-stretch my-10 group",getWidthClasses())} {...props}>
            {
                Children.map(props.children,(child,index)=>{
                    return cloneElement(child as React.ReactElement<Partial<CardAccordeonProps>>, {
                        isFirst: index === 0,
                        number:index+1
                    })
                })
            }
        </div>
    )
}

export default CardAccordeonContainer;
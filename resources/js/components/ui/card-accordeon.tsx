import { useCallback } from "react"
import { cn } from "@/lib/utils"

export interface CardAccordeonProps {
    background:string,
    icon:string,
    title:string,
    description:string
    number?:number,
    isFirst?:boolean
}

const CardAccordeon = ({background, number, icon, title, description, isFirst}: CardAccordeonProps) =>{

    const calculateWidth = useCallback(():string=>{
        const openWidth = 'group-hover:lg:w-55 lg:w-200'
        if(isFirst) return openWidth;
        return 'lg:w-55';
    },[isFirst])

    return (<div role='article' className={cn(' lg:h-182.5 overflow-hidden relative !group flex p-5 bg-center rounded-renovacom bg-cover lg:hover:w-200! transition-all duration-300',calculateWidth())} style={{
        backgroundImage:`url(${background})`
    }}>

        {/* Lines */}
        <svg className="absolute -top-10 lg:top-0 -left-16 md:-left-13 lg:-left-9 xl:-left-4 2xl:left-0 w-200"  viewBox="0 0 716 654" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="110" x2="712" y2="110" stroke="white" stroke-opacity="0.5" stroke-width="2"/>
            <line x1="169" y1="654" x2="169" y2="-4.37113e-08" stroke="white" stroke-opacity="0.5" stroke-width="2"/>
            <line x1="176" y1="110" x2="162" y2="110" stroke="#F8FEFF" stroke-width="2"/>
            <line x1="169" y1="103" x2="169" y2="117" stroke="#F8FEFF" stroke-width="2"/>
        </svg>


        {/* Left side */}
        <div className="min-w-22 max-w-22 md:max-w-24 md:min-w-24 lg:min-w-29 lg:max-w-29 xl:min-w-33 xl:max-w-33 2xl:min-w-40 2xl:max-w-40 transition-all flex flex-col justify-between" >
            <p className="text-5xl font-bold text-white font-space-grotesk">
                {number}.
            </p>

            <div className="flex items-center justify-center w-full h-23">
                <img src={icon} alt={title} className="lg:w-5/6 xl:w-4/6 " />
            </div>
           
        </div>

        {/* Right side */}
        <div className="w-full mt-18 md:mt-16 lg:mt-26 ml-2 p-4 pl-6 flex flex-col justify-between gap-7 lg:gap-0">
            <h3 className=" text-4xl lg:text-5xl 2xl:text-6xl font-space-grotesk lg:leading-16 font-semibold text-white uppercase">
               {title}
            </h3>

            <p className="text-white lg:text-xl xl:text-2xl font-space-grotesk ">
              {description}
            </p>
        </div>

    </div>)
}

export default CardAccordeon;
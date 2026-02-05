import { cn } from "@/lib/utils";
import { getWidthClasses } from "@/utils/utils";
import { StarIcon } from "../icons/icons";
import PrimaryLink from "./primary-link";


interface BannerProps {
    pretitle?: string;
    title: string;
    buttonText?: string;
    buttonLink?: string;
    characteristics?: string[];
    backgroundImage: string;
}

const Banner = ({
    pretitle,
    title,
    buttonText,
    buttonLink,
    characteristics,
    backgroundImage,
}: BannerProps) =>{
    return(
        <section className={cn('flex h-lvh mx-auto min-h-96 items-center justify-center pt-20 xl:min-h-200 bg-no-repeat bg-cover bg-center xl:bg-size-[130%] 2xl:bg-size-[150%] ')} style={{
            backgroundImage: `url(${backgroundImage})`,
         backgroundPosition:'bottom',
        }}>
            
                <div className={cn(getWidthClasses(), 'flex flex-col items-start gap-10 md:gap-20 xl:gap-8')}>
                    {
                        pretitle && (
                             <p className="max-w-xl font-space-grotesk text-2xl font-medium text-white">
                      { pretitle }
                    </p>)
                    }
                 
                    <h1 className="lg:max-w-2/3 font-space-grotesk text-5xl leading-12  md:text-6xl md:leading-15 xl:leading-20 font-medium tracking-wide text-white uppercase" dangerouslySetInnerHTML={{__html: title}} />

                    {
                        buttonLink && buttonText &&(
                             <PrimaryLink href={buttonLink}>{buttonText}</PrimaryLink>
                        )
                    }

                    {
                        characteristics && (
                             <ul className="space-y-4 text-white">
                        {characteristics.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-4 font-space-grotesk text-xl xl:text-2xl"
                            >
                                <StarIcon className=" size-6 xl:size-4" />
                                {item}
                            </li>
                        ))}
                    </ul>)
                    }
                   
                </div>
            </section>
    )
}

export default Banner;
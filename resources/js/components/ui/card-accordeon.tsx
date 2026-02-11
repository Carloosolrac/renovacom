import HTMLReactParser from 'html-react-parser/lib/index';
import { useCallback } from 'react';
import { cn } from '@/lib/utils';

export interface CardAccordeonProps {
    background: string;
    icon: string;
    title: string;
    description: string;
    number?: number;
    isFirst?: boolean;
}

const CardAccordeon = ({ background, number, icon, title, description, isFirst }: CardAccordeonProps) => {
    const calculateWidth = useCallback((): string => {
        const openWidth = 'group-hover:lg:w-55 lg:w-200';
        if (isFirst) return openWidth;
        return 'lg:w-55';
    }, [isFirst]);

    return (
        <div
            role="article"
            className={cn(
                '!group relative flex overflow-hidden rounded-renovacom bg-cover bg-center p-5 transition-all duration-300 lg:h-182.5 lg:hover:w-200!',
                calculateWidth(),
            )}
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            {/* Lines */}
            <svg
                className="absolute -top-10 -left-16 w-200 md:-left-13 lg:top-0 lg:-left-9 xl:-left-4 2xl:left-0"
                viewBox="0 0 716 654"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    y1="110"
                    x2="712"
                    y2="110"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                />
                <line
                    x1="169"
                    y1="654"
                    x2="169"
                    y2="-4.37113e-08"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                />
                <line
                    x1="176"
                    y1="110"
                    x2="162"
                    y2="110"
                    stroke="#F8FEFF"
                    strokeWidth="2"
                />
                <line
                    x1="169"
                    y1="103"
                    x2="169"
                    y2="117"
                    stroke="#F8FEFF"
                    strokeWidth="2"
                />
            </svg>

            {/* Left side */}
            <div className="flex max-w-22 min-w-22 flex-col justify-between transition-all md:max-w-24 md:min-w-24 lg:max-w-29 lg:min-w-29 xl:max-w-33 xl:min-w-33 2xl:max-w-40 2xl:min-w-40">
                <p className="font-space-grotesk text-5xl font-bold text-white">{number}.</p>

                <div className="flex h-23 w-full items-center justify-center">
                    <img
                        src={icon}
                        alt={title}
                        className="lg:w-5/6 xl:w-4/6"
                    />
                </div>
            </div>

            {/* Right side */}
            <div className="mt-18 ml-2 flex w-full flex-col justify-between gap-7 p-4 pl-6 md:mt-16 lg:mt-26 lg:gap-0">
                <h3 className="font-space-grotesk text-4xl font-semibold text-white uppercase lg:text-5xl lg:leading-16 2xl:text-6xl">{title}</h3>

                <div className="font-space-grotesk text-white lg:text-xl xl:text-2xl">{HTMLReactParser(description)}</div>
            </div>
        </div>
    );
};

export default CardAccordeon;

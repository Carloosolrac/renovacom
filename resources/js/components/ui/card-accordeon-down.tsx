import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface CardAccordeonDownProps {
    image: string;
    icon: string;
    title: string;
    contentable: Array<{
        title: string;
        content: string;
    }>;
    cardNumber?: number;
}

const CardAccordeonDown = ({ image, icon, title, contentable, cardNumber }: CardAccordeonDownProps) => {
    const [toggleExpand, setToggleExpand] = useState(false);
    const handleToggleExpand = () => {
        setToggleExpand(!toggleExpand);
    };

    return (
        <div
            role="listitem"
            className={cn('overflow-hidden rounded-renovacom bg-cover bg-center transition-all duration-400 lg:px-20', {
                'h-85 md:h-70': !toggleExpand,
                'h-fit': toggleExpand,
            })}
            style={{
                backgroundImage: `url(${image})`,
                interpolateSize: 'allow-keywords',
            }}
        >
            <div className="space-y-13 border-x border-white p-5 py-10 lg:space-y-14">
                <div className="flex items-center justify-between">
                    <div
                        role="img"
                        aria-label={title}
                        className="size-32 bg-contain bg-center bg-no-repeat lg:ml-10 lg:size-22 lg:scale-160"
                        style={{
                            backgroundImage: `url(${icon})`,
                        }}
                    ></div>
                    <button
                        type="button"
                        aria-label="Expandir tarjeta"
                        onClick={handleToggleExpand}
                        className="cursor-pointer"
                    >
                        <svg
                            className={cn(
                                {
                                    '-translate-x-4 -translate-y-5 rotate-135': toggleExpand,
                                    'rotate-0': !toggleExpand,
                                },
                                'transition-all duration-400',
                            )}
                            width="73"
                            height="73"
                            viewBox="0 0 73 73"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M36.2886 0V36.2886M36.2886 36.2886H0M36.2886 36.2886V72.5772M36.2886 36.2886H72.5772"
                                stroke="white"
                                strokeWidth="5"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex items-start gap-5">
                    <p className="text-3xl font-semibold text-white lg:text-5xl">{cardNumber}.</p>
                    <h1 className="font-space-grotesk text-3xl font-semibold text-white uppercase lg:text-5xl">{title}</h1>
                </div>

                <ul className={cn('mx-5 grid list-disc gap-10 text-white lg:grid-cols-3')}>
                    {contentable.map((item, index) => (
                        <li
                            key={item.title + index}
                            className="space-y-3"
                        >
                            <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                            <p className="text-base text-white lg:text-lg">{item.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardAccordeonDown;

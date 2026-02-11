import HTMLReactParser from 'html-react-parser/lib/index';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';
import { StarIcon } from '../icons/icons';
import PrimaryLink from './primary-link';
import { useCallback } from 'react';

interface BannerProps {
    pretitle?: string;
    title: string;
    buttonText?: string;
    buttonLink?: string;
    characteristics?: string[];
    overlay?: boolean;
    backgroundImage: string;
    innerAnimationText?: boolean;
}

const Banner = ({
    pretitle,
    title,
    buttonText,
    buttonLink,
    characteristics,
    overlay = false,
    backgroundImage,
    innerAnimationText = false,
}: BannerProps) => {
    const applyAnimatedClass = useCallback(
        (animatedClass: string) => {
            if (!innerAnimationText) return '';
            return animatedClass;
        },
        [innerAnimationText],
    );

    return (
        <section
            className={cn(
                'relative mx-auto flex min-h-96 items-center justify-center bg-cover bg-center bg-no-repeat pt-32 pb-10 md:h-lvh lg:pt-20 xl:min-h-200 xl:bg-size-[130%] 2xl:bg-size-[150%]',
            )}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'bottom',
            }}
        >
            {/* Overlay */}
            {overlay && <div className="via-13%-[#063545] absolute top-0 left-0 h-full w-full bg-linear-to-r from-[#062631]/90 to-transparent"></div>}

            {/* Content */}
            <div className={cn(getWidthClasses(), 'z-10 flex flex-col items-start gap-10 md:gap-20 xl:gap-8')}>
                {pretitle && (
                    <p
                        className={cn(
                            'max-w-xl font-space-grotesk text-xl font-medium text-white delay-1000 lg:text-2xl',
                            applyAnimatedClass('opacity-fade-in'),
                            {
                                'opacity-0': innerAnimationText,
                            },
                        )}
                        style={{
                            animationDelay: '2000ms',
                        }}
                    >
                        {pretitle}
                    </p>
                )}

                <div
                    className={cn(
                        'font-space-grotesk text-5xl leading-12 font-medium tracking-wide text-white uppercase delay-500 md:text-6xl md:leading-15 lg:max-w-2/3 xl:leading-20',
                        applyAnimatedClass('fade-in-left'),
                    )}
                >
                    {HTMLReactParser(title)}
                </div>

                {buttonLink && buttonText && (
                    <PrimaryLink
                        href={buttonLink}
                        aria-label={buttonText}
                        className={cn(applyAnimatedClass('opacity-fade-in'), {
                            'opacity-0': innerAnimationText,
                        })}
                        style={{
                            animationDelay: '1000ms',
                        }}
                    >
                        {buttonText}
                    </PrimaryLink>
                )}

                {characteristics && (
                    <ul
                        className={cn('space-y-4 text-white', applyAnimatedClass('opacity-fade-in'), {
                            'opacity-0': innerAnimationText,
                        })}
                        style={{
                            animationDelay: '2000ms',
                        }}
                    >
                        {characteristics.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-4 font-space-grotesk text-xl xl:text-2xl"
                            >
                                <StarIcon className="size-6 xl:size-4" />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default Banner;

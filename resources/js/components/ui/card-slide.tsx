import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import Paragraph from './paragraph';
import PrimaryWhiteLink from './primary-white-link';

export interface CardSlideProps {
    title: string;
    description: string;
    image: string;
    hasWhiteTitle?: boolean;
    totalParentItems?: number;
}

const CardSlide = ({ title, description, image, hasWhiteTitle = false, totalParentItems }: CardSlideProps) => {
    const MAX_HEIGHT = 600;
    const HEIGHT_PER_ITEM = useMemo(() => MAX_HEIGHT / (totalParentItems ? totalParentItems / 2 : 1), [totalParentItems]);

    const computedSize = useMemo(() => {
        switch (totalParentItems) {
            case 2:
                return {
                    title: 'text-5xl',
                    description: 'text-lg! leading-6! lg:leading-7!',
                    parentContanier: 'top-1/2',
                    containerCard: 'h-1/2 gap-4 p-2',
                    card: 'h-full ',
                    translateCard: 'group-hover:-translate-y-[106%] -translate-y-[106%] lg:translate-y-0',
                };
            case 3: {
                return {
                    title: 'text-3xl',
                    description: 'text-base! leading-4.5! ',
                    parentContanier: 'top-1/2 lg:top-[40%]',
                    containerCard: 'h-5/6 gap-2 p-1 lg:gap-4 lg:p-2',
                    card: 'h-50',
                    translateCard: 'group-hover:lg:-translate-y-[109%] -translate-y-[105%] lg:translate-y-0',
                };
            }
            default:
                return {
                    title: 'text-5xl',
                    description: 'text-lg!',
                    parentContanier: 'top-1/2',
                    containerCard: 'h-1/2 gap-4 p-4',
                    card: 'h-full',
                };
        }
    }, [totalParentItems]);

    const computedButtonSize = useMemo(() => {
        switch (totalParentItems) {
            case 2:
                return 'lg';
            case 3:
                return 'sm';
            default:
                return 'lg';
        }
    }, [totalParentItems]);

    return (
        <div
            role="listitem"
            className="group relative max-h-200 w-full max-w-150 overflow-hidden rounded-3xl bg-cover bg-center"
            style={{
                backgroundImage: `url(${image})`,
                height: HEIGHT_PER_ITEM,
            }}
        >
            <div className={cn('absolute flex h-full w-full flex-col', computedSize.parentContanier)}>
                {/* Container cards 1 */}
                <div className={cn('flex w-full items-center', computedSize.containerCard)}>
                    <div
                        className={cn(
                            'flex max-w-5/6 min-w-5/6 items-end justify-start rounded-3xl bg-gray-renovacom p-4 transition-all duration-500',
                            computedSize.card,
                            computedSize.translateCard,
                        )}
                    >
                        <h2
                            className={`max-w-5/6 font-space-grotesk uppercase ${computedSize.title} font-semibold ${hasWhiteTitle ? 'text-white' : 'text-green-renovacom'}`}
                        >
                            {title}
                        </h2>
                    </div>

                    <div className={cn('max-w-5/6 min-w-5/6 rounded-3xl bg-gray-renovacom', computedSize.card)}></div>
                </div>

                <div className={cn('flex w-full items-center', computedSize.containerCard)}>
                    <div
                        className={cn(
                            'flex max-w-5/6 min-w-5/6 flex-col items-start justify-between rounded-3xl bg-gray-renovacom p-5 transition-all duration-500',
                            computedSize.card,
                            computedSize.translateCard,
                        )}
                    >
                        <Paragraph className={`font-sans text-white ${computedSize.description}`}>{description}</Paragraph>
                        <PrimaryWhiteLink
                            buttonSize={computedButtonSize}
                            aria-label={`Conocer más sobre ${title}`}
                        >
                            Conoce más
                        </PrimaryWhiteLink>
                    </div>
                    <div className={cn('max-w-5/6 min-w-5/6 rounded-3xl bg-gray-renovacom', computedSize.card)}></div>
                </div>
            </div>
        </div>
    );
};

export default CardSlide;

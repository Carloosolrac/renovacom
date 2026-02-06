import { useMemo } from 'react';
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
                    description: 'text-lg! leading-7!',
                };
            case 3: {
                return {
                    title: 'text-3xl',
                    description: 'text-base! leading-5!',
                };
            }
            default:
                return {
                    title: 'text-5xl',
                    description: 'text-lg!',
                };
        }
    }, [totalParentItems]);

    return (
        <div
            role="item"
            className="group relative max-h-200 w-full max-w-150 overflow-hidden rounded-renovacom bg-cover bg-center"
            style={{
                backgroundImage: `url(${image})`,
                height: HEIGHT_PER_ITEM,
            }}
        >
            <div className="absolute top-1/2 flex h-full w-full flex-col">
                <div className="flex h-1/2 w-full items-center gap-4 p-4">
                    <div className="flex h-full max-w-5/6 min-w-5/6 -translate-y-[113%] items-end justify-start rounded-3xl bg-gray-renovacom p-4 transition-all duration-500 group-hover:-translate-y-[113%] lg:translate-y-0">
                        <h2
                            className={`max-w-5/6 font-space-grotesk uppercase ${computedSize.title} font-semibold ${hasWhiteTitle ? 'text-white' : 'text-green-renovacom'}`}
                        >
                            {title}
                        </h2>
                    </div>

                    <div className="h-full max-w-5/6 min-w-5/6 rounded-3xl bg-gray-renovacom"></div>
                </div>

                <div className="flex h-1/2 w-full items-center gap-4 p-4">
                    <div className="flex h-full max-w-5/6 min-w-5/6 -translate-y-[113%] flex-col items-start justify-center gap-4 rounded-3xl bg-gray-renovacom p-5 transition-all duration-500 group-hover:-translate-y-[113%] lg:translate-y-0">
                        <Paragraph className={`font-sans text-white ${computedSize.description}`}>{description}</Paragraph>
                        <PrimaryWhiteLink>Conoce más</PrimaryWhiteLink>
                    </div>
                    <div className="h-full max-w-5/6 min-w-5/6 rounded-3xl bg-gray-renovacom"></div>
                </div>
            </div>
        </div>
    );
};

export default CardSlide;

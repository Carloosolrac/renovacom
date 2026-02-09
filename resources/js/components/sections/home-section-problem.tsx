import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const HomeSectionProblem = () => {
    const cardCenterRef = useRef<HTMLDivElement>(null);
    const cardBottomToTopRef = useRef<HTMLDivElement>(null);
    const cardsLeftRef = useRef<HTMLDivElement[]>([]);
    const cardBottomBottomRef = useRef<HTMLDivElement>(null);
    const cardBottomRef = useRef<HTMLDivElement>(null);
    const cardRightRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const [animationState, setAnimationState] = useState<'idle' | 'in' | 'out'>('idle');

    const handleSectionClick = () => {
        if (animationState === 'in') {
            setAnimationState('out');
        }
        if (animationState === 'out' || animationState === 'idle') {
            setAnimationState('in');
        }
    };

    const getAnimationClass = (animationName: string) => {
        if (animationState === 'idle') return '';
        if (animationState === 'in') return `${animationName}-in`;
        if (animationState === 'out') return `${animationName}-out`;
        return '';
    };

    return (
        <section
            ref={sectionRef}
            onClick={handleSectionClick}
            className={cn(
                'relative mx-auto flex h-[85lvh] max-h-250 min-h-175 cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden bg-cover bg-center',
            )}
            style={{
                backgroundImage: `url(${'/assets/home/background-section-problem.png'})`,
            }}
        >
            <div className="flex items-center gap-6">
                <div
                    ref={(el) => {
                        if (el) cardsLeftRef.current[0] = el;
                    }}
                    className={cn('h-[75lvh] max-h-210 min-h-150 min-w-275 rounded-renovacom-xl bg-gray-renovacom', getAnimationClass('card-left'))}
                ></div>

                <div className="h-[75lvh] max-h-210 min-h-150 min-w-275 rounded-renovacom-xl bg-gray-renovacom"></div>
                <div className="h-[75lvh] max-h-210 min-h-150 min-w-275 rounded-renovacom-xl bg-gray-renovacom"></div>
            </div>

            <div className="flex items-center gap-6">
                <div
                    ref={(el) => {
                        if (el) cardsLeftRef.current[1] = el;
                    }}
                    className={cn('h-[75lvh] max-h-210 min-h-150 min-w-275 rounded-renovacom-xl bg-gray-renovacom', getAnimationClass('card-left'))}
                ></div>

                {/* MIDDLE INITIAL */}
                <div
                    ref={cardCenterRef}
                    className={cn(
                        'flex h-[75lvh] max-h-210 min-h-150 max-w-275 min-w-275 items-center justify-center rounded-renovacom-xl bg-gray-renovacom px-5 uppercase',
                        getAnimationClass('card-center'),
                    )}
                >
                    <h3
                        className={cn('text-center font-space-grotesk text-7xl leading-24 font-semibold text-white!', getAnimationClass('text-card'))}
                    >
                        Automatizamos la captura y análisis de datos, <span className="text-green-renovacom">para optimizar la Operación.</span>
                    </h3>
                </div>

                <div
                    ref={cardRightRef}
                    className={cn('h-[75lvh] max-h-210 min-h-150 min-w-275 rounded-renovacom-xl bg-gray-renovacom', getAnimationClass('card-right'))}
                ></div>
            </div>

            <div className="flex items-center gap-6">
                <div
                    ref={(el) => {
                        if (el) cardsLeftRef.current[2] = el;
                    }}
                    className={cn('h-[75lvh] max-h-210 min-h-150 min-w-275 rounded-renovacom-xl bg-gray-renovacom', getAnimationClass('card-left'))}
                ></div>

                <div
                    ref={cardBottomRef}
                    className={cn('h-[75lvh] max-h-210 min-h-150 min-w-275 rounded-renovacom-xl bg-gray-renovacom', getAnimationClass('card-bottom'))}
                ></div>

                {/* LEFT TO TOP */}
                <div
                    ref={cardBottomToTopRef}
                    className={cn(
                        'flex h-[75lvh] max-h-210 min-h-150 min-w-275 items-center justify-center rounded-renovacom-xl bg-gray-renovacom',
                        getAnimationClass('card-bottom-to-top'),
                    )}
                >
                    <h3 className="max-w-3xl text-justify font-space-grotesk text-5xl leading-16 text-white">
                        Renovacom implementa un{' '}
                        <span className="text-green-renovacom">sistema de adquisición de datos autónoma y análisis con IA</span> que permite detectar
                        y clasificar daños en 48 horas.
                    </h3>
                </div>
            </div>

            <div
                ref={cardBottomBottomRef}
                className={cn(
                    'absolute left-1/2 h-[75lvh] max-h-210 min-h-150 min-w-275 -translate-x-1/2 translate-y-[103%] rounded-renovacom-xl bg-gray-renovacom',
                    getAnimationClass('card-bottom-bottom'),
                )}
            ></div>
        </section>
    );
};

export default HomeSectionProblem;

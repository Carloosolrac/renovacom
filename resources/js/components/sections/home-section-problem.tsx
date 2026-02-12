import { useEffect, useRef, useState } from 'react';
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

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const { top } = sectionRef.current.getBoundingClientRect();
            const scrollActivation = sectionRef.current.clientHeight / 2;
            if (top <= -scrollActivation && animationState === 'idle') {
                setAnimationState('in');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animationState]);

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
                'relative mx-auto flex h-130 cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden bg-cover bg-center lg:h-[85lvh] lg:max-h-230 lg:gap-6 xl:max-h-250 xl:min-h-175',
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
                    className={cn(
                        'h-95 w-95 rounded-renovacom-xl bg-gray-renovacom md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:min-w-275',
                        getAnimationClass('card-left'),
                    )}
                ></div>

                <div className="h-95 w-95 rounded-renovacom-xl bg-gray-renovacom md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:min-w-275"></div>
                <div className="h-95 w-95 rounded-renovacom-xl bg-gray-renovacom md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:min-w-275"></div>
            </div>

            <div className="flex items-center gap-6">
                <div
                    ref={(el) => {
                        if (el) cardsLeftRef.current[1] = el;
                    }}
                    className={cn(
                        'h-95 w-95 rounded-renovacom-xl bg-gray-renovacom md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:min-w-275',
                        getAnimationClass('card-left'),
                    )}
                ></div>

                {/* MIDDLE INITIAL */}
                <div
                    ref={cardCenterRef}
                    className={cn(
                        'flex h-95 w-95 items-center justify-center rounded-renovacom-xl bg-gray-renovacom px-5 uppercase md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:max-w-275 lg:min-w-275',
                        getAnimationClass('card-center'),
                    )}
                >
                    <h3
                        className={cn(
                            'text-center font-space-grotesk text-4xl leading-12 font-medium text-white! lg:text-7xl lg:leading-24',
                            getAnimationClass('text-card'),
                        )}
                    >
                        Automatizamos la captura y análisis de datos, <span className="text-green-renovacom">para optimizar la Operación.</span>
                    </h3>
                </div>

                <div
                    ref={cardRightRef}
                    className={cn(
                        'h-95 w-95 rounded-renovacom-xl bg-gray-renovacom md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:min-w-275',
                        getAnimationClass('card-right'),
                    )}
                ></div>
            </div>

            <div className="flex items-center gap-6">
                <div
                    ref={(el) => {
                        if (el) cardsLeftRef.current[2] = el;
                    }}
                    className={cn(
                        'h-95 w-95 rounded-renovacom-xl bg-gray-renovacom md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:min-w-275',
                        getAnimationClass('card-left'),
                    )}
                ></div>

                <div
                    ref={cardBottomRef}
                    className={cn(
                        'h-95 w-95 rounded-renovacom-xl bg-gray-renovacom md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:min-w-275',
                        getAnimationClass('card-bottom'),
                    )}
                ></div>

                {/* LEFT TO TOP */}
                <div
                    ref={cardBottomToTopRef}
                    className={cn(
                        'flex h-95 w-95 -translate-x-[5.5%] items-center justify-center rounded-renovacom-xl bg-gray-renovacom p-10 md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:min-w-275 lg:translate-x-0 lg:p-20',
                        getAnimationClass('card-bottom-to-top'),
                    )}
                >
                    <h3 className="lg:text-auto max-w-5xl items-center text-justify text-2xl font-normal tracking-tight text-white lg:text-7xl lg:leading-16">
                        Renovacom implementa un{' '}
                        <span className="text-green-renovacom">sistema de adquisición de datos autónoma y análisis con IA</span> que permite detectar
                        y clasificar daños en 48 horas.
                    </h3>
                </div>
            </div>

            <div
                ref={cardBottomBottomRef}
                className={cn(
                    'absolute left-1/2 h-95 w-95 -translate-x-1/2 translate-y-[105.5%] rounded-renovacom-xl bg-gray-renovacom md:h-120 md:w-130 lg:h-[75lvh] lg:max-h-210 lg:min-h-150 lg:min-w-275 lg:translate-y-[103%]',
                    getAnimationClass('card-bottom-bottom'),
                )}
            ></div>
        </section>
    );
};

export default HomeSectionProblem;

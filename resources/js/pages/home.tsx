import { Fragment } from 'react/jsx-runtime';
import { StarIcon } from '@/components/icons/icons';
import HomeSectionProblem from '@/components/sections/home-section-problem';
import ArticleDivision from '@/components/ui/article-division';
import Banner from '@/components/ui/banner';
import CardAccordeon from '@/components/ui/card-accordeon';
import CardAccordeonContainer from '@/components/ui/card-accordeon-container';
import CardSlide from '@/components/ui/card-slide';
import CardSlideContainer from '@/components/ui/card-slide-container';
import CardStatistics from '@/components/ui/card-statistics';
import CardStatisticsContainer from '@/components/ui/card-statistics-container';
import Paragraph from '@/components/ui/paragraph';
import PrimaryBlackLink from '@/components/ui/primary-black-link';
import PrimaryWhiteLink from '@/components/ui/primary-white-link';
import SecondaryLink from '@/components/ui/secondary-link';
import Title from '@/components/ui/title';
import AppLayout from '@/layout/app-layout';
import { cn } from '@/lib/utils';
import { metodologia, servicios } from '@/routes';
import type { BannerModel, CardAccordeonModel, CardSlideModel, CardStatisticModel, OtherServiceModel } from '@/types';
import { getWidthClasses } from '@/utils/utils';

interface HomeProps {
    banner: BannerModel;
    cardAccordeons: CardAccordeonModel[];
    cardSlides: CardSlideModel[];
    otherServices: OtherServiceModel[];
    cardStatistics: CardStatisticModel[];
}

const Home = ({ banner, cardAccordeons, cardSlides, otherServices, cardStatistics }: HomeProps) => {
    return (
        <>
            <Banner
                title={banner.title}
                backgroundVideo={banner.background_video}
                buttonLink={banner.button_link}
                buttonText={banner.button_text}
                innerAnimationText={banner.has_animation}
                characteristics={banner.characteristics}
            />
            <section className={cn(getWidthClasses())}>
                <ul
                    role="list"
                    className="flex flex-row items-center justify-around gap-2 text-3xl text-black-renovacom md:flex-row lg:gap-8"
                >
                    {['Agilidad', 'Precisión', 'Seguridad', 'Autonomía'].map((item, index) => (
                        <Fragment key={index}>
                            <li className="flex items-center gap-4 text-xs md:text-lg lg:text-2xl">{item}</li>
                            {index < 3 && (
                                <li>
                                    <StarIcon className="size-3 fill-black-renovacom lg:size-6" />
                                </li>
                            )}
                        </Fragment>
                    ))}
                </ul>
            </section>

            <HomeSectionProblem />

            <section className={cn(getWidthClasses())}>
                <Title>Un flujo de trabajo diseñado para convertir datos en decisiones operativas</Title>

                <CardAccordeonContainer>
                    {cardAccordeons.map((card) => (
                        <CardAccordeon
                            key={card.id}
                            background={card.background}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </CardAccordeonContainer>

                <div className="flex flex-col items-center justify-end gap-5 py-10 md:flex-row">
                    <SecondaryLink
                        href={metodologia.get().url}
                        aria-label="Conocer nuestra metodología"
                        prefetch={true}
                        viewTransition={true}
                        cacheFor="10s"
                    >
                        Conoce nuestra metodología
                    </SecondaryLink>
                    <PrimaryBlackLink
                        href="#contacto"
                        aria-label="Contactar para hablar sobre nuestros servicios"
                    >
                        Hablemos
                    </PrimaryBlackLink>
                </div>
            </section>

            <section className={cn('space-y-5 lg:space-y-7', getWidthClasses())}>
                <Paragraph className="text-center font-medium">Inspecciones técnicas avanzadas</Paragraph>
                <Title className="text-center">Soluciones de inspección para reducir riesgos y aumentar rendimiento</Title>
                <Paragraph className="mx-auto text-center lg:max-w-4/6">
                    Sistema integral de captura de datos en activos eólicos y fotovoltaicos, con procesamiento mediante IA que transforma información
                    técnica en insumos accionables para una gestión eficiente de O&M.
                </Paragraph>

                <CardSlideContainer>
                    {cardSlides.map((card) => (
                        <CardSlide
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    ))}
                </CardSlideContainer>
            </section>

            <section className="space-y-14">
                <div className={getWidthClasses()}>
                    <Title>Otros servicios</Title>
                </div>

                <div role="list">
                    {otherServices.map((service) => (
                        <div
                            role="listitem"
                            key={service.id}
                            className="group hover:bg-black-renovacom"
                        >
                            <div
                                className={cn(
                                    getWidthClasses(),
                                    'flex flex-col items-center justify-between gap-4 border-b-2 border-black-renovacom py-8 text-black-renovacom group-hover:text-white lg:flex-row lg:gap-0',
                                )}
                            >
                                <h3 className="my-4 font-space-grotesk text-3xl font-medium uppercase lg:max-w-4/6 lg:text-4xl">{service.title}</h3>

                                <PrimaryWhiteLink
                                    href={service.link ?? '#contacto'}
                                    role="button"
                                    className="ml-auto hidden group-hover:flex"
                                    aria-label={`Conocer más sobre ${service.title}`}
                                >
                                    Conoce más
                                </PrimaryWhiteLink>

                                <SecondaryLink
                                    href={service.link ?? '#contacto'}
                                    role="button"
                                    className="ml-auto group-hover:hidden lg:hidden"
                                    aria-label={`Conocer más sobre ${service.title}`}
                                >
                                    Conoce más
                                </SecondaryLink>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={cn(getWidthClasses(), 'flex flex-col items-end justify-end gap-4 sm:flex-row lg:flex-row lg:items-center')}>
                    <SecondaryLink
                        href={servicios.get().url}
                        aria-label="Conocer nuestros servicios"
                        prefetch={true}
                        viewTransition={true}
                        cacheFor="10s"
                    >
                        Cononce nuestros servicios
                    </SecondaryLink>
                    <PrimaryBlackLink
                        href="#contacto"
                        aria-label="Contactar para hablar"
                    >
                        Hablemos
                    </PrimaryBlackLink>
                </div>
            </section>

            <section className={cn('space-y-14', getWidthClasses())}>
                <Title>Transformamos datos precisos en decisiones estratégicas</Title>
                <ArticleDivision
                    leftText="Nuestro servicio entrega precisión en la obtención y análisis de datos para una toma de decisiones fundamentada. Esto se traduce en un plan de mantenimiento optimizado que protege su inversión."
                    rightText="Nuestro equipo cuenta con más de 12 años de experiencia en proyectos solares, eólicos y BESS, combinando criterio profesional y tecnología de vanguardia."
                    image="/assets/home/background-article-transform.png"
                />
            </section>
            <section className="bg-black-renovacom">
                <CardStatisticsContainer className={getWidthClasses()}>
                    {cardStatistics.map((stat) => (
                        <CardStatistics
                            key={stat.id}
                            icon={stat.icon}
                            title={stat.title}
                            description={stat.description}
                        />
                    ))}
                </CardStatisticsContainer>
            </section>

            {/* <section className={cn(getWidthClasses())}>
                <InfiniteSlider
                    items={[
                        {
                            src: '/assets/logos/bbc.png',
                            alt: 'BBC Logo',
                        },
                        {
                            src: '/assets/logos/deloitte.png',
                            alt: 'Deloitte Logo',
                        },
                        {
                            src: '/assets/logos/unilever.png',
                            alt: 'Unilever Logo',
                        },
                    ]}
                />
            </section> */}
        </>
    );
};

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Home;

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
import InfiniteSlider from '@/components/ui/infinite-slider';
import Paragraph from '@/components/ui/paragraph';
import PrimaryBlackLink from '@/components/ui/primary-black-link';
import PrimaryWhiteLink from '@/components/ui/primary-white-link';
import SecondaryLink from '@/components/ui/secondary-link';
import Title from '@/components/ui/title';
import AppLayout from '@/layout/app-layout';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';

const Home = () => {
    const txt = 'DE LA INGENIERÍA DE PROYECTOS A LA <span className="text-green-renovacom">INTELIGENCIA OPERATIVA</span>';

    return (
        <>
            <Banner
                title={txt}
                backgroundImage="/assets/home/hero-home.gif"
                buttonLink="#contacto"
                buttonText="Hablemos"
                characteristics={['Inteligencia operativa para activos renovables', 'Sistema de adquisición de datos autónoma']}
            />
            <section className={cn(getWidthClasses(), 'bg-white py-10')}>
                <ul
                    role="list"
                    className="flex flex-col flex-wrap items-center justify-around gap-8 text-3xl text-black-renovacom md:flex-row"
                >
                    {['Agilidad', 'Precisión', 'Seguridad', 'Autonomía'].map((item, index) => (
                        <>
                            <li
                                key={index}
                                className="flex items-center gap-4"
                            >
                                {item}
                            </li>
                            {index < 3 && (
                                <li>
                                    <StarIcon className="size-6 fill-black-renovacom" />
                                </li>
                            )}
                        </>
                    ))}
                </ul>
            </section>

            <HomeSectionProblem />

            <section className={cn(getWidthClasses(), 'py-10')}>
                <Title>Un flujo de trabajo diseñado para convertir datos en decisiones operativas</Title>

                <CardAccordeonContainer>
                    <CardAccordeon
                        background="/assets/home/background-section-card-dron.png"
                        icon={'/assets/home/icons/drone.png'}
                        title={'Captura autónoma de datos'}
                        description={
                            'Datos precisos desde el terreno, sin riesgos operativos. <br/> <br/> Realizamos vuelos autónomos y repetibles que aseguran cobertura total del activo y datos consistentes, sin trabajos en altura ni detenciones de planta.'
                        }
                    />
                    <CardAccordeon
                        background="/assets/home/background-section-card-dron.png"
                        title={'Análisis de Datos con IA'}
                        description="Detectamos lo crítico y priorizamos lo relevante. 
                        Procesamos grandes volúmenes de información mediante inteligencia artificial para identificar y clasificar fallas según tipo y severidad."
                        icon={'/assets/home/icons/ai.png'}
                    />
                    <CardAccordeon
                        background="/assets/home/background-section-card-dron.png"
                        title="Validación Humana"
                        description="Tecnología respaldada por criterio profesional.

Nuestros ingenieros revisan y validan los hallazgos, asegurando diagnósticos confiables y recomendaciones con sustento técnico real."
                        icon="/assets/home/icons/eye.png"
                    />
                    <CardAccordeon
                        background="/assets/home/background-section-card-dron.png"
                        title="Resultados Accionables e Integrables"
                        description="Información lista para decidir y actuar.
Entregamos reportes claros y datos estructurados, compatibles con sus plataformas de gestión, para optimizar la planificación de O&M."
                        icon="/assets/home/icons/dashboard.png"
                    />
                </CardAccordeonContainer>

                <div className="flex flex-col items-center justify-end gap-5 py-10 md:flex-row">
                    <SecondaryLink>Conoce nuestra metodología</SecondaryLink>
                    <PrimaryBlackLink>Hablemos</PrimaryBlackLink>
                </div>
            </section>

            <section className={cn('space-y-5 py-10', getWidthClasses())}>
                <Paragraph className="text-center font-bold">Inspecciones técnicas avanzadas</Paragraph>
                <Title className="text-center">Soluciones de inspección para reducir riesgos y aumentar rendimiento</Title>
                <Paragraph className="mx-auto text-center lg:max-w-4/6">
                    Sistema integral de captura de datos en activos eólicos y fotovoltaicos, con procesamiento mediante IA que transforma información
                    técnica en insumos accionables para una gestión eficiente de O&M.
                </Paragraph>

                <CardSlideContainer>
                    <CardSlide
                        title="INSPECCIÓN SOLAR"
                        description="Detectamos fallas a nivel de celda mediante termografía y combinamos medición de suciedad en un solo vuelo para estimar pérdidas y optimizar mantenimiento."
                        image="/assets/home/background-card-slider-1.png"
                    />
                    <CardSlide
                        title="INSPECCIÓN SOLAR"
                        description="Detectamos fallas a nivel de celda mediante termografía y combinamos medición de suciedad en un solo vuelo para estimar pérdidas y optimizar mantenimiento."
                        image="/assets/home/background-card-slider-1.png"
                    />
                </CardSlideContainer>
            </section>
            <section className="space-y-5 py-10">
                <div className={getWidthClasses()}>
                    <Title>Otros servicios</Title>
                </div>

                <div role="list">
                    {[
                        'Seguimiento a la consturcción',
                        'DESARROLLO DE GEMEOS VIRTUALES PARA LA DIGITALIZACIÓN DE ACTIVOS',
                        'SERVICIOS DE INGENIERÍA Y CONSULTORÍA A MEDIDA',
                    ].map((item, index) => (
                        <div
                            role="item"
                            key={index}
                            className="group hover:bg-black-renovacom"
                        >
                            <div
                                className={cn(
                                    getWidthClasses(),
                                    'flex flex-col items-center justify-between gap-4 border-b-2 border-black-renovacom py-8 text-black-renovacom group-hover:text-white lg:flex-row lg:gap-0',
                                )}
                            >
                                <h3 className="my-4 font-space-grotesk text-3xl uppercase lg:max-w-4/6 lg:text-4xl">{item}</h3>

                                <PrimaryWhiteLink
                                    role="button"
                                    className="hidden group-hover:flex"
                                >
                                    Conoce más
                                </PrimaryWhiteLink>

                                <SecondaryLink
                                    role="button"
                                    className="group-hover:hidden lg:hidden"
                                >
                                    Conoce más
                                </SecondaryLink>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={cn(getWidthClasses(), 'flex flex-col items-center justify-end gap-4 lg:flex-row')}>
                    <SecondaryLink>Cononce nuestros servicios</SecondaryLink>
                    <PrimaryBlackLink>Hablemos</PrimaryBlackLink>
                </div>
            </section>

            <section className={cn('space-y-5 py-10', getWidthClasses())}>
                <Title>Transformamos datos precisos en decisiones estratégicas</Title>
                <ArticleDivision
                    leftText="Nuestro servicio entrega precisión en la obtención y análisis de datos para una toma de decisiones fundamentada. Esto se traduce en un plan de mantenimiento optimizado que protege su inversión."
                    rightText="Nuestro equipo cuenta con más de 12 años de experiencia en proyectos solares, eólicos y BESS, combinando criterio profesional y tecnología de vanguardia."
                    image="/assets/home/background-article-transform.png"
                />
            </section>
            <section className="bg-black-renovacom py-10">
                <CardStatisticsContainer className={getWidthClasses()}>
                    {[
                        {
                            icon: '/assets/home/icons/statistic-light.png',
                            title: '+70 MWP',
                            description: 'Capacidad inspeccionada por día en plantas solares.',
                        },
                        {
                            icon: '/assets/home/icons/statistic-up.png',
                            title: '48h',
                            description: 'Tiempo de entrega de reportes.',
                        },
                        {
                            icon: '/assets/home/icons/statistic-time.png',
                            title: '35 min',
                            description: 'Tiempo de inspección por aerogenerador.',
                        },
                    ].map((item, index) => (
                        <CardStatistics
                            key={index}
                            {...item}
                        />
                    ))}
                </CardStatisticsContainer>
            </section>
            <section className={cn('py-10', getWidthClasses())}>
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
            </section>
        </>
    );
};

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Home;

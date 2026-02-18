import ArticlesSelector from '@/components/ui/articles-selector';
import Banner from '@/components/ui/banner';
import CardSlide from '@/components/ui/card-slide';
import CardSlideContainer from '@/components/ui/card-slide-container';
import Paragraph from '@/components/ui/paragraph';
import SecondaryLink from '@/components/ui/secondary-link';
import Title from '@/components/ui/title';
import AppLayout from '@/layout/app-layout';
import { cn } from '@/lib/utils';
import type { BannerModel, CardSlideModel } from '@/types/models';
import { getWidthClasses } from '@/utils/utils';

interface ServiceProps {
    banner: BannerModel;
    cardSlides: CardSlideModel[];
}

const Service = ({ banner, cardSlides }: ServiceProps) => {
    return (
        <>
            <Banner
                backgroundVideo={banner.background_video}
                pretitle={banner.pretitle || undefined}
                title={banner.title || "Inspecciones inteligentes para una <span className='text-green-renovacom'> operación optimizada</span>"}
                characteristics={banner.characteristics}
                overlay={banner.has_overlay}
            />

            <section>
                <Title className={cn(getWidthClasses(), 'text-center')}>Servicios principales</Title>
                <ArticlesSelector
                    items={[
                        {
                            content:
                                'Nuestro servicio Wind Intelligence utiliza vuelos autónomos de drones con sensores de ultra alta resolución para evaluar con precisión milimétrica el estado de palas, torres y componentes superficiales.',
                            title: 'INSPECCIÓN Y DIAGNÓSTICO PARA <span className="text-green-renovacom">ENERGÍA EÓLICA</span>',
                            precontent: 'Conoce el estado real de tus aerogeneradores',
                            icon: '/assets/services/windmill.png',
                            image: '/assets/services/background-windmill.png',
                            deliveries: [
                                {
                                    icon: '/assets/services/windmill/icon-1.png',
                                    title: 'Reporte de Priorización',
                                    description: 'Listado de hallazgos clasificados por severidad y tipo de falla',
                                },
                                {
                                    icon: '/assets/services/windmill/icon-2.png',
                                    title: 'Base de Datos Geoespacial',
                                    description: 'Coordenadas exactas de cada anomalía  para ubicación precisa en campo',
                                },
                                {
                                    icon: '/assets/services/windmill/icon-3.png',
                                    title: 'Recomendaciones de Acción',
                                    description: 'Plan de intervención focalizado que prioriza tareas de mantenimiento y recursos',
                                },
                            ],
                            benefits: [
                                { icon: '/assets/icons/shield.png', label: 'Elimina riesgos de seguridad asociados a trabajos en altura' },
                                {
                                    icon: '/assets/icons/target.png',
                                    label: 'Anticipa fallas costosas con la detección temprana de defectos progresivos',
                                },
                                {
                                    icon: '/assets/icons/round-about.png',
                                    label: 'Extiende la vida útil del activo con un programa basado en su condición real',
                                },
                                { icon: '/assets/icons/graph.png', label: 'Optimiza el OPEX, interviniendo solo donde y cuando es necesario' },
                            ],
                        },
                        {
                            content:
                                'Nuestro servicio Solar Intelligence combina en un solo vuelo autónomo termografía de alta sensibilidad y fotogrametría RGB para ofrecer un diagnóstico completo.',
                            title: 'INSPECCIÓN Y DIAGNÓSTICO PARA <span className="text-green-renovacom">ENERGÍA SOLAR</span>',
                            precontent: 'Maximiza la generación y minimiza las pérdidas con diagnósticos integrales',
                            icon: '/assets/services/solar-panel.png',
                            image: '/assets/services/background-panel.png',
                            deliveries: [
                                {
                                    icon: '/assets/services/windmill/icon-1.png',
                                    title: 'Fallas Eléctricas y Térmicas',
                                    description: 'Hotspots, diodos en corto, celdas defectuosas, string failures',
                                },
                                {
                                    icon: '/assets/services/windmill/icon-2.png',
                                    title: 'Soiling (Suciedad)',
                                    description:
                                        'Mapeo de la distribución de suciedad en la planta con estimación cuantitativa de las pérdidas de generación',
                                },
                                {
                                    icon: '/assets/services/windmill/icon-3.png',
                                    title: 'Daños Mecánicos',
                                    description: 'Microfisuras, delaminación, daños por granizo',
                                },
                            ],
                            benefits: [
                                { icon: '/assets/icons/eye-cancel.png', label: 'Identifica pérdidas invisibles al ojo humano que impactan su P&L' },
                                {
                                    icon: '/assets/icons/calendar-time.png',
                                    label: 'Optimiza el programa de limpieza, dirigiendo esfuerzos a los sectores con mayor retorno',
                                },
                                {
                                    icon: '/assets/icons/check-list.png',
                                    label: 'Audita contratistas de O&M con datos objetivos sobre la efectividad de las limpiezas',
                                },
                                {
                                    icon: '/assets/icons/fire.png',
                                    label: 'Previene incendios y degradación acelerada con la detección temprana de puntos calientes críticos',
                                },
                            ],
                        },
                    ]}
                />
            </section>
            {/* Servicios principales */}
            <section className={cn(getWidthClasses(), 'space-y-14')}>
                <Title>Servicios complementarios</Title>
                <CardSlideContainer>
                    {cardSlides.map((slide) => (
                        <CardSlide
                            key={slide.id}
                            title={slide.title}
                            description={slide.description}
                            image={slide.image}
                        />
                    ))}
                </CardSlideContainer>
            </section>

            {/* Servicios complementarios */}
            <section className={cn(getWidthClasses(), 'space-y-5')}>
                <Paragraph className="text-center font-space-grotesk font-medium">
                    ¿Listo para tomar decisiones basadas en datos e información confiable?
                </Paragraph>
                <Title className="text-center">De la Captura de Datos a la Decisión Estratégica</Title>
                <Paragraph className="text-center">
                    En Renovacom entregamos la capa de inteligencia <br className="hidden lg:block" /> que su operación necesita para ser más
                    predictiva y eficiente
                </Paragraph>
                <SecondaryLink
                    className="mx-auto"
                    href="#contacto"
                    aria-label="Hablar sobre tu proyecto"
                >
                    Hablemos de tu proyecto
                </SecondaryLink>
            </section>
        </>
    );
};

Service.layout = (page: React.ReactNode) => <AppLayout layoutFormWithCTA={false}>{page}</AppLayout>;

export default Service;

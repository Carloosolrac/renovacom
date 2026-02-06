import ArticlesSelector from '@/components/ui/articles-selector';
import Banner from '@/components/ui/banner';
import CardSlide from '@/components/ui/card-slide';
import CardSlideContainer from '@/components/ui/card-slide-container';
import Paragraph from '@/components/ui/paragraph';
import SecondaryLink from '@/components/ui/secondary-link';
import Title from '@/components/ui/title';
import AppLayout from '@/layout/app-layout';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';

const Service = () => {
    return (
        <>
            <Banner
                backgroundImage="/assets/services/hero-banner.gif"
                pretitle="Servicios de inspección y consultoría para la gestión de activos renovables."
                title="Inspecciones inteligentes para una <span className='text-green-renovacom'> operación optimizada</span>"
                characteristics={[
                    'Inspecciones 100% automatizadas',
                    'Análisis de datos empleando IA',
                    'Entreega en 48 horas',
                    'Datos listos para tu gestión de activos',
                ]}
                overlay={true}
            />
            <section className={cn(getWidthClasses(), 'space-y-14')}>
                <Title>Servicios principales</Title>
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
                                    description: 'Listado de hallazgos clasificados por severidad y tipo de falla.',
                                },
                                {
                                    icon: '/assets/services/windmill/icon-2.png',
                                    title: 'Base de Datos Geoespacial',
                                    description: 'Coordenadas exactas de cada anomalía  para ubicación precisa en campo.',
                                },
                                {
                                    icon: '/assets/services/windmill/icon-3.png',
                                    title: 'Recomendaciones de Acción',
                                    description: 'Plan de intervención focalizado que prioriza tareas de mantenimiento y recursos.',
                                },
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
                                    description: 'Hotspots, diodos en corto, celdas defectuosas, string failures.',
                                },
                                {
                                    icon: '/assets/services/windmill/icon-2.png',
                                    title: 'Soiling (Suciedad)',
                                    description:
                                        'Mapeo de la distribución de suciedad en la planta con estimación cuantitativa de las pérdidas de generación.',
                                },
                                {
                                    icon: '/assets/services/windmill/icon-3.png',
                                    title: 'Daños Mecánicos',
                                    description: 'Microfisuras, delaminación, daños por granizo.',
                                },
                            ],
                        },
                    ]}
                />
            </section>

            <section className={cn(getWidthClasses(), 'space-y-14')}>
                <Title>Servicios complementarios</Title>
                <CardSlideContainer>
                    {[
                        {
                            title: 'Monitoreo y control de construcción (EPC)',
                            description:
                                'Detectamos fallas a nivel de celda mediante termografía y combinamos medición de suciedad en un solo vuelo para estimar pérdidas y optimizar mantenimiento.',
                            image: '/assets/services/monitoreo-y-control.png',
                        },
                        {
                            title: 'DIGITALIZACIÓN DE ACTIVOS Y GEMELOS VIRTUALES',
                            description:
                                'Detectamos fallas a nivel de celda mediante termografía y combinamos medición de suciedad en un solo vuelo para estimar pérdidas y optimizar mantenimiento.',
                            image: '/assets/services/digitalizacion-de-activos.png',
                        },
                        {
                            title: 'CONSULTORÍA E INGENIERÍA A MEDIDA',
                            description:
                                'Detectamos fallas a nivel de celda mediante termografía y combinamos medición de suciedad en un solo vuelo para estimar pérdidas y optimizar mantenimiento.',
                            image: '/assets/services/consultoria-e-ingenieria.png',
                        },
                    ].map((item, index) => (
                        <CardSlide
                            hasWhiteTitle={true}
                            key={index}
                            {...item}
                        />
                    ))}
                </CardSlideContainer>
            </section>

            <section className={cn(getWidthClasses(), 'space-y-5')}>
                <Paragraph className="text-center">¿Listo para tomar decisiones basadas en datos en información confiable?</Paragraph>
                <Title className="text-center">De la Captura de Datos a la Decisión Estratégica</Title>
                <Paragraph className="text-center">
                    En Renovacom entregamos la capa de inteligencia que su operación necesita para ser más predictiva y eficiente
                </Paragraph>
                <SecondaryLink
                    className="mx-auto"
                    href="#contacto"
                >
                    Hablemos de tu proyecto
                </SecondaryLink>
            </section>
        </>
    );
};

Service.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Service;

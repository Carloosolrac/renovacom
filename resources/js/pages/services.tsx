import ArticlesSelector from '@/components/ui/articles-selector';
import Banner from '@/components/ui/banner';
import CardSlide from '@/components/ui/card-slide';
import CardSlideContainer from '@/components/ui/card-slide-container';
import Paragraph from '@/components/ui/paragraph';
import PrimaryBlackLink from '@/components/ui/primary-black-link';
import SecondaryLink from '@/components/ui/secondary-link';
import Title from '@/components/ui/title';
import AppLayout from '@/layout/app-layout';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';

const Service = () => {
    return (
        <>
            <Banner
                backgroundVideo="/assets/services/video-hero-servicios.mp4"
                pretitle="Servicios de inspección y consultoría para la gestión de activos renovables."
                title="Inspecciones inteligentes para una <span className='text-green-renovacom'> operación optimizada</span>"
                characteristics={[
                    'Inspecciones 100% automatizadas.',
                    'Análisis de datos empleando IA.',
                    'Entrega en 48 horas.',
                    'Datos listos para tu gestión de activos.',
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

            <section className="w-full bg-black-renovacom py-20">
                <div className={cn(getWidthClasses(), 'space-y-12')}>
                    <h3 className="font-space-grotesk text-4xl font-medium text-white uppercase">Beneficios clave</h3>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Beneficio 1 */}
                        <div className="flex gap-6">
                            <img
                                src="/assets/icons/shield.png"
                                className="size-14"
                                alt=""
                            />
                            <Paragraph className="text-white">Elimina riesgos de seguridad asociados a trabajos en altura.</Paragraph>
                        </div>

                        {/* Beneficio 2 */}
                        <div className="flex gap-6">
                            <img
                                src="/assets/icons/target.png"
                                className="size-14"
                                alt=""
                            />
                            <Paragraph className="text-white">Anticipa fallas costosas con la detección temprana de defectos progresivos.</Paragraph>
                        </div>

                        {/* Beneficio 3 */}
                        <div className="flex gap-6">
                            <img
                                src="/assets/icons/round-about.png"
                                className="size-14"
                                alt=""
                            />
                            <Paragraph className="text-white">
                                Extiende la vida útil del activo con un programa basado en su condición real.
                            </Paragraph>
                        </div>

                        {/* Beneficio 4 */}
                        <div className="flex gap-6">
                            <img
                                src="/assets/icons/graph.png"
                                className="size-14"
                                alt=""
                            />

                            <Paragraph className="text-white">Optimiza el OPEX, interviniendo solo donde y cuando es necesario.</Paragraph>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <PrimaryBlackLink
                            href={'#contacto'}
                            aria-label="Hablar sobre tu proyecto"
                        >
                            Habla con un Especialista
                        </PrimaryBlackLink>
                    </div>
                </div>
            </section>

            {/* Servicios principales */}
            <section className={cn(getWidthClasses(), 'space-y-14')}>
                <Title>Servicios complementarios</Title>
                <CardSlideContainer>
                    {[
                        {
                            title: 'Monitoreo y control de construcción (EPC)',
                            description:
                                'Realizamos vuelos periódicos para generar ortomosaicos y modelos 3D actualizados, apoyando el control de avance, la verificación técnica y la documentación as-built.',
                            image: '/assets/services/monitoreo-y-control.png',
                        },
                        {
                            title: 'DIGITALIZACIÓN DE ACTIVOS Y GEMELOS VIRTUALES',
                            description:
                                'Creamos la base digital de sus activos mediante nubes de puntos y modelos 3D fotorrealistas, facilitando la planificación, el análisis de riesgos y la gestión técnica.',
                            image: '/assets/services/digitalizacion-de-activos.png',
                        },
                        {
                            title: 'CONSULTORÍA E INGENIERÍA A MEDIDA',
                            description:
                                'Aplicamos experiencia sectorial y dominio tecnológico para resolver desafíos específicos, desde análisis de data O&M hasta el diseño de programas de monitoreo adaptados a cada proyecto.',
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

import { StarIcon } from '@/components/icons/icons';
import HomeSectionProblem from '@/components/sections/home-section-problem';
import Banner from '@/components/ui/banner';
import CardAccordeon from '@/components/ui/card-accordeon';
import CardAccordeonContainer from '@/components/ui/card-accordeon-container';
import Paragraph from '@/components/ui/paragraph';
import PrimaryBlackLink from '@/components/ui/primary-black-link';
import PrimaryLink from '@/components/ui/primary-link';
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
            </section>
        </>
    );
};

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Home;

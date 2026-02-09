import ArticleDivision from '@/components/ui/article-division';
import Banner from '@/components/ui/banner';
import CardAccordeonDown from '@/components/ui/card-accordeon-down';
import CardAccordeonDownContainer from '@/components/ui/card-accordeon-down-container';
import PrimaryBlackLink from '@/components/ui/primary-black-link';
import Title from '@/components/ui/title';
import AppLayout from '@/layout/app-layout';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';

const Methodology = () => {
    const bannerTitle = `Metodología orientada a la toma de <span className='text-green-renovacom'> decisiones operativas </span>`;

    const articleRight = `<ul>
    <li>
        <strong>Reduce costos</strong> → intervenciones de mantenimiento solo donde son necesarias.
    </li>
    <br/>
    <li>
        <strong>Minimiza riesgos</strong> → anticipando fallos potenciales.
    </li>
    <br/>
    <li>
        <strong>Maximiza la vida útil</strong> → programa de mantenimiento basado en su condición real.
    </li>
</ul>`;
    const articleLeft = `Nuestra metodología cierra la brecha entre la recolección de datos y la toma de decisiones. Entregamos un diagnóstico técnico ponderado y una hoja de ruta para la acción.
    <br/>
    <br/>
El resultado final es una operación que pasa de ser reactiva a ser  <strong>predictiva y optimizada.</strong>`;

    return (
        <>
            <Banner
                title={bannerTitle}
                pretitle="Reduce riesgos, anticipa fallas y optimiza la gestión de O&M en activos renovables."
                characteristics={[
                    'Captura autónoma de datos',
                    'Análisis de datos empleando IA',
                    'Validación humana experta',
                    'Reportes con información accionable',
                ]}
                backgroundImage="/assets/methodology/hero-banner.gif"
                overlay={true}
            />

            <section className={cn(getWidthClasses(), 'space-y-14')}>
                <Title>De la Captura a la Decisión: Nuestro Proceso de Ingeniería de Datos</Title>
                <CardAccordeonDownContainer>
                    <CardAccordeonDown
                        image="/assets/captura-de-datos.png"
                        icon="/assets/icons/drone.png"
                        title="Adquisición de Datos"
                        contentable={[
                            {
                                title: 'Planificación:',
                                content:
                                    'Definimos misiones de vuelo óptimas (altura, solapamiento, ruta entre otras), garantizando cobertura total y cumplimiento normativo.',
                            },
                            {
                                title: 'Ejecución:',
                                content:
                                    'Vuelos autónomos repetibles, que capturan imágenes de ultra alta resolución (RGB) y/o termográficas con georreferenciación cm-level.',
                            },
                            {
                                title: 'Ventaja Operativa:',
                                content:
                                    'Elimina riesgos de seguridad en campo, reduce el downtime del activo y asegura la consistencia de los datos entre campañas, permitiendo análisis comparativos precisos.',
                            },
                        ]}
                    />
                    <CardAccordeonDown
                        image="/assets/analisis-con-ia.png"
                        icon="/assets/icons/ai.png"
                        title="Análisis Estructurado con IA"
                        contentable={[
                            {
                                title: 'Procesamiento:',
                                content:
                                    'Empleamos pipelines de IA entrenados con miles de imágenes etiquetadas de fallas en palas, torres y módulos fotovoltaicos.',
                            },
                            {
                                title: 'Detección y Clasificación:',
                                content:
                                    'Los algoritmos identifican anomalías (grietas, erosión, hotspots, soiling, etc) y las clasifican automáticamente por tipo y nivel de severidad.',
                            },
                            {
                                title: 'Salida Estructurada:',
                                content: 'Generamos una base de datos geoespacial de hallazgos, lista para la siguiente capa de validación.',
                            },
                        ]}
                    />
                    <CardAccordeonDown
                        image="/assets/validacion-tecnica.png"
                        icon="/assets/icons/eye.png"
                        title="Validación de Ingeniería"
                        contentable={[
                            {
                                title: 'Auditoría de Hallazgos:',
                                content: 'Nuestros ingenieros especialistas revisan y validan los hallazgos de la IA.',
                            },
                            {
                                title: 'Cierre del Ciclo:',
                                content:
                                    'Retroalimentación (feedback loop) que entrena continuamente a nuestros modelos, mejorando su precisión con cada inspección.',
                            },
                            {
                                title: 'Sello de Confiabilidad:',
                                content:
                                    'Es la garantía de que cada recomendación está respaldada por tecnología de punta y criterio profesional experto.',
                            },
                        ]}
                    />
                    <CardAccordeonDown
                        image="/assets/resultados-accionables.png"
                        icon="/assets/icons/dashboard.png"
                        title="Entrega de Resultados Accionables"
                        contentable={[
                            {
                                title: 'Reportes Ejecutivos:',
                                content:
                                    'Documentos con resumen ejecutivo, hallazgos prioritarios, análisis de tendencias y recomendaciones claras de mantenimiento.',
                            },
                            {
                                title: 'Dashboard Interactivo:',
                                content:
                                    'Acceso web a una plataforma donde visualizar todos los hallazgos en el contexto del activo, filtrar por severidad y exportar datos.',
                            },
                            {
                                title: 'Integración:',
                                content:
                                    'Entregamos los datos estructurados (CSV, JSON) y reportes en formatos compatibles para su integración en sistemas CMMS (como SAP, IBM Maximo), GIS o plataformas de BI.',
                            },
                        ]}
                    />
                </CardAccordeonDownContainer>
            </section>

            <section className={cn(getWidthClasses(), 'space-y-14')}>
                <Title>Transformamos datos precisos en decisiones estratégicas</Title>
                <ArticleDivision
                    image="/assets/methodology/background-article-division.png"
                    leftText={articleLeft}
                    rightText={articleRight}
                />
                <div className="flex items-center justify-end">
                    <PrimaryBlackLink href={'#contacto'}>Habla con un especialista</PrimaryBlackLink>
                </div>
            </section>
        </>
    );
};

Methodology.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Methodology;

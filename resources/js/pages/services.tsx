import ArticlesSelector from '@/components/ui/articles-selector';
import Banner from '@/components/ui/banner';
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
                        },
                        {
                            content:
                                'Nuestro servicio Solar Intelligence combina en un solo vuelo autónomo termografía de alta sensibilidad y fotogrametría RGB para ofrecer un diagnóstico completo.',
                            title: 'INSPECCIÓN Y DIAGNÓSTICO PARA <span className="text-green-renovacom">ENERGÍA SOLAR</span>',
                            precontent: 'Conoce el estado real de tus aerogeneradores',
                            icon: '/assets/services/solar-panel.png',
                            image: '/assets/services/background-panel.png',
                        },
                    ]}
                />
            </section>
        </>
    );
};

Service.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Service;

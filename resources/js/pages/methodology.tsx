import ArticleDivision from '@/components/ui/article-division';
import Banner from '@/components/ui/banner';
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

            <section className={cn(getWidthClasses(), 'py-10')}>
                <Title>De la Captura a la Decisión: Nuestro Proceso de Ingeniería de Datos</Title>
            </section>

            <section className={cn(getWidthClasses(), 'space-y-5 py-10')}>
                <Title>Transformamos datos precisos en decisiones estratégicas</Title>
                <ArticleDivision
                    image="/assets/methodology/background-article-division.png"
                    leftText="Nuestra metodología cierra la brecha entre la recolección de datos y la toma de decisiones. Entregamos un diagnóstico técnico ponderado y una hoja de ruta para la acción.

El resultado final es una operación que pasa de ser reactiva a ser predictiva y optimizada."
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

import ArticleDivision from '@/components/ui/article-division';
import Banner from '@/components/ui/banner';
import CardAccordeonDown from '@/components/ui/card-accordeon-down';
import CardAccordeonDownContainer from '@/components/ui/card-accordeon-down-container';
import PrimaryBlackLink from '@/components/ui/primary-black-link';
import Title from '@/components/ui/title';
import AppLayout from '@/layout/app-layout';
import { cn } from '@/lib/utils';
import type { BannerModel, CardAccordeonDownModel } from '@/types';
import { getWidthClasses } from '@/utils/utils';

interface MethodologyProps {
    banner: BannerModel;
    cardAccordeonDowns: CardAccordeonDownModel[];
}

const Methodology = ({ banner, cardAccordeonDowns }: MethodologyProps) => {
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
                title={banner.title}
                buttonText={banner.button_text}
                buttonLink={banner.button_link}
                backgroundVideo={banner.background_video}
                overlay={banner.has_overlay}
                pretitle={banner.pretitle || undefined}
                innerAnimationText={banner.has_animation}
                characteristics={banner.characteristics}
            />

            <section className={cn(getWidthClasses(), 'space-y-14')}>
                <Title>
                    De la Captura a la Decisión: <br /> Nuestro Proceso de Ingeniería de Datos
                </Title>
                <CardAccordeonDownContainer>
                    {cardAccordeonDowns.map((card) => (
                        <CardAccordeonDown
                            key={card.id}
                            image={card.image}
                            icon={card.icon}
                            title={card.title}
                            contentable={card.items.map((item) => ({
                                title: item.title,
                                content: item.description,
                            }))}
                        />
                    ))}
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
                    <PrimaryBlackLink
                        href={'#contacto'}
                        aria-label="Hablar con un especialista"
                    >
                        Habla con un especialista
                    </PrimaryBlackLink>
                </div>
            </section>
        </>
    );
};

Methodology.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Methodology;

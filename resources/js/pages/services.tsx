import ArticlesSelector from '@/components/ui/articles-selector';
import Banner from '@/components/ui/banner';
import CardSlide from '@/components/ui/card-slide';
import CardSlideContainer from '@/components/ui/card-slide-container';
import Paragraph from '@/components/ui/paragraph';
import SecondaryLink from '@/components/ui/secondary-link';
import Title from '@/components/ui/title';
import AppLayout from '@/layout/app-layout';
import { cn } from '@/lib/utils';
import type { BannerModel, CardSlideModel, ServiceArticleModel } from '@/types/models';
import { getWidthClasses } from '@/utils/utils';
import { Head } from '@inertiajs/react';

interface ServiceProps {
    banner: BannerModel;
    cardSlides: CardSlideModel[];
    serviceArticles: ServiceArticleModel[];
    seo: {
        title: string;
        description: string;
    };
}

const Service = ({ banner, cardSlides, serviceArticles, seo }: ServiceProps) => {
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta
                    name="description"
                    content={seo.description}
                />
            </Head>
            <Banner
                backgroundVideo={banner.background_video}
                pretitle={banner.pretitle || undefined}
                title={banner.title || "Inspecciones inteligentes para una <span className='text-green-renovacom'> operación optimizada</span>"}
                characteristics={banner.characteristics}
                overlay={banner.has_overlay}
            />

            <section>
                <Title className={cn(getWidthClasses(), 'text-center')}>Servicios principales</Title>
                <ArticlesSelector items={serviceArticles} />
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

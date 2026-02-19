import { Head } from '@inertiajs/react';
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
    seo: {
        title: string;
        description: string;
    };
    article: {
        image: string;
        left_text: string;
        right_text: string;
    };
}

const Methodology = ({ banner, cardAccordeonDowns, seo, article }: MethodologyProps) => {
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
                    image={article.image}
                    leftText={article.left_text}
                    rightText={article.right_text}
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

import HTMLReactParser from 'html-react-parser/lib/index';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';
import CardSimple from './card-simple';
import CardSimpleContainer from './card-simple-container';
import Paragraph from './paragraph';
import PrimaryBlackLink from './primary-black-link';

interface ArticlesSelectorProps {
    items: Array<{
        title: string;
        content: string;
        icon: string;
        image: string;
        precontent?: string;
        deliveries?: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
        benefits?: Array<{
            icon: string;
            label: string;
        }>;
    }>;
}

const ArticlesSelector = ({ items }: ArticlesSelectorProps) => {
    const [selectedArticle, setSelectedArticle] = useState(0);
    const toggleArticle = (index: number) => {
        setSelectedArticle(index);
    };

    return (
        <>
            <div className={cn(getWidthClasses(), 'space-y-14')}>
                <div className="space-y-14">
                    <div className="flex items-center justify-center gap-4">
                        {items.map((item, index) => (
                            <button
                                key={index}
                                className={cn('size-22 cursor-pointer rounded-full border-2 border-black-renovacom p-4', {
                                    'bg-black-renovacom': selectedArticle === index,
                                    'bg-transparent': selectedArticle !== index,
                                })}
                                onClick={() => toggleArticle(index)}
                                aria-label={`Seleccionar artículo ${index + 1}`}
                            >
                                <img
                                    className="w-full"
                                    src={item.icon}
                                    alt={item.title}
                                    style={{
                                        filter:
                                            selectedArticle === index
                                                ? 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(4deg) brightness(109%) contrast(106%)'
                                                : 'brightness(0) saturate(100%) invert(19%) sepia(12%) saturate(5649%) hue-rotate(160deg) brightness(94%) contrast(91%)',
                                    }}
                                />
                            </button>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <Paragraph>{items[selectedArticle]?.precontent}</Paragraph>
                        <div
                            role="article"
                            className="relative h-140 w-full overflow-hidden rounded-3xl bg-cover bg-center lg:h-150"
                            style={{
                                backgroundImage: `url('${items[selectedArticle].image}')`,
                            }}
                        >
                            <div className="absolute top-30 left-0 flex h-full w-[110%] flex-col">
                                {/* F */}
                                <div className="flex min-h-95 snap-x snap-proximity gap-5 overflow-x-scroll p-2.5 lg:overflow-hidden">
                                    <div className="flex h-85 min-w-5/6 snap-center items-end rounded-3xl bg-gray-renovacom p-5 lg:w-5/6 lg:min-w-auto">
                                        <div className="font-space-grotesk text-4xl leading-14 font-semibold text-white uppercase lg:w-5/6 lg:text-5xl">
                                            {HTMLReactParser(items[selectedArticle].title)}
                                        </div>
                                    </div>

                                    <div className="flex h-85 min-w-5/6 snap-center items-end rounded-3xl bg-gray-renovacom p-5 lg:w-5/6 lg:min-w-auto">
                                        <div className="max-w-5/6 text-lg leading-8 text-white lg:max-w-2/3 lg:text-xl">
                                            {HTMLReactParser(items[selectedArticle].content)}
                                        </div>
                                    </div>
                                </div>

                                {/* S */}
                                <div className="flex min-h-95 gap-5 p-2.5">
                                    <div className="h-85 w-full min-w-5/6 rounded-3xl bg-gray-renovacom lg:w-5/6 lg:min-w-auto"></div>
                                    <div className="h-85 w-full min-w-5/6 rounded-3xl bg-gray-renovacom lg:w-5/6 lg:min-w-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="font-space-grotesk text-4xl font-medium text-black-renovacom uppercase">Qué entregamos</h3>
                    <CardSimpleContainer>
                        {items[selectedArticle].deliveries?.map((delivery, index) => (
                            <CardSimple
                                key={index}
                                icon={delivery.icon}
                                title={delivery.title}
                                description={delivery.description}
                            />
                        )) || []}
                    </CardSimpleContainer>
                </div>
            </div>

            <section className="mt-14 w-full bg-black-renovacom py-20">
                <div className={cn(getWidthClasses(), 'space-y-12')}>
                    <h3 className="font-space-grotesk text-4xl font-medium text-white uppercase">Beneficios clave</h3>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {items[selectedArticle].benefits?.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex gap-6"
                            >
                                <img
                                    src={benefit.icon}
                                    className="size-14"
                                    alt=""
                                />
                                <Paragraph className="text-white">{benefit.label}</Paragraph>
                            </div>
                        ))}
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
        </>
    );
};

export default ArticlesSelector;

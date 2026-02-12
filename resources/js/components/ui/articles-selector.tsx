import HTMLReactParser from 'html-react-parser/lib/index';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import CardSimple from './card-simple';
import CardSimpleContainer from './card-simple-container';
import Paragraph from './paragraph';

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
    }>;
}

const ArticlesSelector = ({ items }: ArticlesSelectorProps) => {
    const [selectedArticle, setSelectedArticle] = useState(0);
    const toggleArticle = (index: number) => {
        setSelectedArticle(index);
    };

    return (
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
                    className="relative h-150 w-full overflow-hidden rounded-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${items[selectedArticle].image}')`,
                    }}
                >
                    <div className="absolute top-30 left-0 flex h-full w-[110%] flex-col">
                        {/* F */}
                        <div className="flex min-h-105 snap-x snap-proximity gap-5 overflow-scroll p-2.5 lg:overflow-hidden">
                            <div className="flex h-100 min-w-5/6 snap-center items-end rounded-3xl bg-gray-renovacom p-5 lg:w-5/6 lg:min-w-auto">
                                <div className="font-space-grotesk text-4xl leading-14 font-semibold text-white uppercase lg:w-5/6 lg:text-5xl">
                                    {HTMLReactParser(items[selectedArticle].title)}
                                </div>
                            </div>

                            <div className="flex h-100 min-w-5/6 snap-center items-end rounded-3xl bg-gray-renovacom p-5 lg:w-5/6 lg:min-w-auto">
                                <div className="max-w-5/6 text-lg leading-8 text-white lg:max-w-2/3 lg:text-xl">
                                    {HTMLReactParser(items[selectedArticle].content)}
                                </div>
                            </div>
                        </div>

                        {/* S */}
                        <div className="flex min-h-105 gap-5 p-2.5">
                            <div className="h-100 w-full min-w-5/6 rounded-3xl bg-gray-renovacom lg:w-5/6 lg:min-w-auto"></div>
                            <div className="h-100 w-full min-w-5/6 rounded-3xl bg-gray-renovacom lg:w-5/6 lg:min-w-auto"></div>
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
    );
};

export default ArticlesSelector;

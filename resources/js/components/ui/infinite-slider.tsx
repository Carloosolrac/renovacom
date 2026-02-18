import type { PartnerLogoModel } from '@/types';

export default function InfiniteSlider({ items }: { items: PartnerLogoModel[] }) {
    return (
        <div className="relative flex w-full gap-20 overflow-hidden">
            <ul className="animate-slide-left flex items-stretch gap-20">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="bg-gray-primary flex w-42 items-center justify-center p-4"
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(20%) sepia(58%) saturate(664%) hue-rotate(148deg) brightness(94%) contrast(94%)',
                            }}
                        />
                    </li>
                ))}
            </ul>

            <ul className="animate-slide-left flex items-stretch gap-20">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="bg-gray-primary flex w-42 items-center justify-center p-4"
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(20%) sepia(58%) saturate(664%) hue-rotate(148deg) brightness(94%) contrast(94%)',
                            }}
                        />
                    </li>
                ))}
            </ul>

            <ul className="animate-slide-left flex items-stretch gap-20">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="bg-gray-primary flex w-42 items-center justify-center p-4"
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(20%) sepia(58%) saturate(664%) hue-rotate(148deg) brightness(94%) contrast(94%)',
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

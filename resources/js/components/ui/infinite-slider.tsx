export default function InfiniteSlider({ items }: { items: { src: string; alt: string }[] }) {
    return (
        <div className="relative flex w-full gap-20 overflow-hidden">
            <ul className="animate-slide-left flex items-stretch gap-20">
                {items.map((image, index) => (
                    <li
                        key={index}
                        className="bg-gray-primary flex w-42 items-center justify-center p-4"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(20%) sepia(58%) saturate(664%) hue-rotate(148deg) brightness(94%) contrast(94%)',
                            }}
                        />
                    </li>
                ))}
            </ul>

            <ul className="animate-slide-left flex items-stretch gap-20">
                {items.map((image, index) => (
                    <li
                        key={index}
                        className="bg-gray-primary flex w-42 items-center justify-center p-4"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(20%) sepia(58%) saturate(664%) hue-rotate(148deg) brightness(94%) contrast(94%)',
                            }}
                        />
                    </li>
                ))}
            </ul>

            <ul className="animate-slide-left flex items-stretch gap-20">
                {items.map((image, index) => (
                    <li
                        key={index}
                        className="bg-gray-primary flex w-42 items-center justify-center p-4"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
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

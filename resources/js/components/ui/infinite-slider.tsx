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
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

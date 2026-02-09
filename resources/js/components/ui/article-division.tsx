import HTMLReactParser from 'html-react-parser';

interface ArticleDivisionProps {
    image: string;
    leftText: string;
    rightText: string;
}

const ArticleDivision = ({ image, leftText, rightText }: ArticleDivisionProps) => {
    return (
        <article
            className="relative max-h-200 w-full overflow-hidden rounded-3xl bg-cover bg-center lg:h-200"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <svg
                className="absolute bottom-0 hidden overflow-hidden lg:block lg:transform-[scale(2)] xl:transform-[scale(1.8)] 2xl:transform-[scale(1.5)]"
                viewBox="0 0 1216 235"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="1216"
                    y1="1.27637"
                    y2="1.27637"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                />
                <line
                    x1="606.995"
                    y1="234.276"
                    x2="607.005"
                    y2="0.276326"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                />
                <line
                    x1="600"
                    y1="1"
                    x2="614"
                    y2="1"
                    stroke="#F8FEFF"
                    strokeWidth="2"
                />
                <line
                    x1="607"
                    y1="8"
                    x2="607"
                    stroke="#F8FEFF"
                    strokeWidth="2"
                />
            </svg>

            <div className="absolute bottom-0 hidden w-full grid-cols-2 place-content-center gap-20 px-20 lg:grid lg:h-74 xl:h-78 2xl:h-78">
                <div className="text-xl text-white">{HTMLReactParser(leftText)}</div>
                <div className="text-xl text-white">{HTMLReactParser(rightText)}</div>
            </div>

            <div className="flex snap-x snap-mandatory gap-10 overflow-scroll p-5 pt-42 lg:hidden">
                <div className="min-w-full snap-center rounded-xl bg-gray-renovacom p-2 text-lg leading-6 text-white shadow backdrop-blur-xs">
                    {HTMLReactParser(leftText)}
                </div>
                <div className="min-w-full snap-center rounded-xl bg-gray-renovacom p-2 text-lg leading-6 text-white shadow backdrop-blur-xs">
                    {HTMLReactParser(rightText)}
                </div>
            </div>
        </article>
    );
};

export default ArticleDivision;

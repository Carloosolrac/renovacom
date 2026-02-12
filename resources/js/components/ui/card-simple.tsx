interface CardSimpleProps {
    icon: string;
    title: string;
    description: string;
}

const CardSimple = ({ icon, title, description }: CardSimpleProps) => {
    return (
        <div
            role="listitem"
            className="my-4 flex flex-col justify-between gap-4 rounded-3xl bg-white p-10"
            style={{
                border: '1px solid #0C4557',
            }}
        >
            <img
                className="max-w-14"
                src={icon}
                alt={title}
            />
            <h3 className="font-space-grotesk text-2xl font-medium text-black-renovacom">{title}</h3>

            <p className="text-lg text-black-renovacom lg:text-xl">{description}</p>
        </div>
    );
};

export default CardSimple;

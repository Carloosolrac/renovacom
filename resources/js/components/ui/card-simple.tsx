interface CardSimpleProps {
    icon: string;
    title: string;
    description: string;
}

const CardSimple = ({ icon, title, description }: CardSimpleProps) => {
    return (
        <div
            role="listitem"
            className="border-blue-renovacom space-y-8 rounded-3xl border-2 bg-white p-10"
        >
            <img
                className="max-w-14"
                src={icon}
                alt={title}
            />
            <h3 className="text-2xl font-semibold text-black-renovacom">{title}</h3>

            <p className="text-lg text-black-renovacom">{description}</p>
        </div>
    );
};

export default CardSimple;

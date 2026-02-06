const CardSimpleContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            role="list"
            className="grid gap-10 lg:grid-cols-3"
        >
            {children}
        </div>
    );
};

export default CardSimpleContainer;

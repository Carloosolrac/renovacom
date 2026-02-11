import { cn } from '@/lib/utils';

const Paragraph = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
    const { className, ...rest } = props;
    return (
        <p
            className={cn(`text-lg leading-7 text-black-renovacom lg:text-2xl lg:leading-8`, className)}
            {...rest}
        >
            {props.children}
        </p>
    );
};

export default Paragraph;

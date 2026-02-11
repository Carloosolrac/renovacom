import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const Title = (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
        <h1
            className={cn('font-space-grotesk text-4xl leading-13 font-medium text-black-renovacom uppercase lg:text-6xl lg:leading-20', className)}
            {...rest}
        >
            {props.children}
        </h1>
    );
};

export default Title;

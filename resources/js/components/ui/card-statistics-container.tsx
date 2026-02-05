import { Children, cloneElement, type DetailedHTMLProps, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import type { CardStatisticsProps } from './card-statistics';

const CardStatisticsContainer = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const { className, ...rest } = props;
    return (
        <div
            className={cn('grid gap-5 py-10 lg:grid-cols-3', className)}
            role="list"
            {...rest}
        >
            {Children.map(props.children, (child, index) =>
                cloneElement(child as React.ReactElement<Partial<CardStatisticsProps>>, {
                    delay: (index + 1) * 100,
                }),
            )}
        </div>
    );
};

export default CardStatisticsContainer;

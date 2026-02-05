import { Children, cloneElement, type DetailedHTMLProps, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import type { CardSlideProps } from './card-slide';

const CardSlideContainer = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const { className, ...rest } = props;

    return (
        <div
            role="list"
            className={cn('flex flex-col items-stretch gap-8 lg:flex-row', className)}
            {...rest}
        >
            {Children.map(props.children, (child) =>
                cloneElement(child as React.ReactElement<Partial<CardSlideProps>>, { totalParentItems: Children.count(props.children) }),
            )}
        </div>
    );
};

export default CardSlideContainer;

import { Children, cloneElement, type DetailedHTMLProps, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import type { CardSlideProps } from './card-slide';

const CardSlideContainer = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const { className, ...rest } = props;

    const computedDisplayClasses =
        Children.count(props.children) <= 3 ? 'flex-col flex items-stretch lg:flex-row' : 'flex-col flex items-stretch lg:grid lg:grid-cols-3';

    return (
        <div
            role="list"
            className={cn('gap-4 2xl:gap-8', className, computedDisplayClasses)}
            {...rest}
        >
            {Children.map(props.children, (child) =>
                cloneElement(child as React.ReactElement<Partial<CardSlideProps>>, { totalParentItems: Children.count(props.children) }),
            )}
        </div>
    );
};

export default CardSlideContainer;

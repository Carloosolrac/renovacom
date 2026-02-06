import { Children, cloneElement, type DetailedHTMLProps, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import type { CardAccordeonDownProps } from './card-accordeon-down';

const CardAccordeonDownContainer = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    const { className, ...rest } = props;

    return (
        <div
            role="list"
            className={cn(className, 'flex flex-col items-stretch gap-5')}
            {...rest}
        >
            {Children.map(props.children, (child, index) =>
                cloneElement(child as React.ReactElement<Partial<CardAccordeonDownProps>>, {
                    cardNumber: index + 1,
                }),
            )}
        </div>
    );
};

export default CardAccordeonDownContainer;

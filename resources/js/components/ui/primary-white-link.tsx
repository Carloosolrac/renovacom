import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import type { InertiaLinkProps } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { getButtonSize, type ButtonSize } from '@/utils/utils';

const PrimaryWhiteLink = ({ buttonSize = 'lg', ...props }: InertiaLinkProps & { buttonSize?: ButtonSize }) => {
    const { className, ...rest } = props;

    return (
        <Link
            {...rest}
            className={cn(
                'font-regular flex w-fit items-center rounded-full border-2 border-white bg-transparent tracking-wide text-white transition-all xl:text-xl',
                className,
                getButtonSize(buttonSize),
            )}
        >
            {props.children}
            <ChevronRightIcon className="-mr-1 ml-2 size-5" />
        </Link>
    );
};

export default PrimaryWhiteLink;

import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import type { InertiaLinkProps } from '@inertiajs/react';
import { cn } from '@/lib/utils';
const PrimaryWhiteLink = (props: InertiaLinkProps) => {
    const { className, ...rest } = props;

    return (
        <Link
            {...rest}
            className={cn(
                'flex w-fit items-center rounded-full border-2 border-white bg-transparent px-5 py-3.5 font-medium tracking-wide text-white transition-all xl:text-xl',
                className,
            )}
        >
            {props.children}
            <ChevronRightIcon className="-mr-1 ml-2 size-5" />
        </Link>
    );
};

export default PrimaryWhiteLink;

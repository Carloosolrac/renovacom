import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import type { InertiaLinkProps } from '@inertiajs/react';
const PrimaryBlackLink = (props: InertiaLinkProps) => {
    return (
        <Link
            {...props}
            className="font-regular flex w-fit items-center rounded-full border-2 border-green-renovacom bg-green-renovacom px-5 py-3.5 tracking-wide text-black-renovacom transition-all hover:border-black-renovacom hover:bg-white xl:text-xl"
        >
            {props.children}
            <ChevronRightIcon className="-mr-1 ml-2 size-5" />
        </Link>
    );
};

export default PrimaryBlackLink;

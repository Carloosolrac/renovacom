import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import type { InertiaLinkProps } from '@inertiajs/react';
const PrimaryLink = (props: InertiaLinkProps) => {
    return (
        <Link
            {...props}
            className="flex w-fit items-center rounded-full border-2 border-green-renovacom bg-green-renovacom px-5 py-3.5 font-normal tracking-wide text-black-renovacom transition-all hover:border-white hover:bg-transparent hover:text-white xl:text-xl"
        >
            {props.children}
            <ChevronRightIcon className="-mr-1 ml-2 size-5" />
        </Link>
    );
};

export default PrimaryLink;

import {ChevronRightIcon } from "@heroicons/react/24/solid"
import { Link } from "@inertiajs/react"
import type { InertiaLinkProps } from "@inertiajs/react"
const PrimaryLink = (props:InertiaLinkProps) =>{
    return (
        <Link {...props} className="bg-green-renovacom border-2 border-green-renovacom xl:text-xl hover:bg-transparent hover:border-white hover:text-white transition-all px-5 py-3.5 font-medium text-black-renovacom rounded-full flex items-center tracking-wide w-fit">
        {props.children}
        <ChevronRightIcon className="size-5 ml-2 -mr-1"/>
        </Link>
    )
}

export default PrimaryLink; 
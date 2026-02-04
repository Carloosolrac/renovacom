import {ChevronRightIcon } from "@heroicons/react/24/solid"
import { Link } from "@inertiajs/react"
import type { InertiaLinkProps } from "@inertiajs/react"
const PrimaryLink = (props:InertiaLinkProps) =>{
    return (
        <Link {...props} className="bg-green-renovacom border-2 border-green-renovacom hover:bg-transparent hover:border-white hover:text-white transition-all px-5 py-3 font-medium text-black rounded-3xl flex items-center tracking-wide">
        {props.children}
        <ChevronRightIcon className="size-5 ml-2 -mr-1"/>
        </Link>
    )
}

export default PrimaryLink; 
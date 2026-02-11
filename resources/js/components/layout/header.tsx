import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { Link } from '@inertiajs/react';
import { useCallback, useState } from 'react';
import useNavigation from '@/hooks/useNavigation';
import { cn } from '@/lib/utils';
import { home } from '@/routes';
import { getWidthClasses } from '@/utils/utils';
import { InstagramIcon, LinkedInIcon } from '../icons/logos';
import PrimaryLink from '../ui/primary-link';

const Header = () => {
    const { current, navigationItems } = useNavigation();

    const backgroundColorBasedUrl = useCallback(() => {
        return current !== home.get().url ? 'bg-transparent border-white border-2' : 'bg-gray-renovacom';
    }, [current]);

    const [toggleMenu, setToggleMenu] = useState(false);
    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <>
            <header
                className={cn(
                    backgroundColorBasedUrl(),
                    getWidthClasses(),
                    'absolute right-1/2 z-50 my-5 flex translate-x-1/2 items-center justify-between rounded-4xl p-3 backdrop-blur-lg lg:rounded-renovacom lg:p-5 lg:py-6',
                )}
            >
                <Link
                    href={home.get().url}
                    prefetch={true}
                    cacheFor={'10s'}
                    viewTransition={true}
                >
                    <img
                        src="/assets/logo.png"
                        alt="Renovacom Logo"
                        className="w-64"
                    />
                </Link>

                {/* Header on large screens */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-8">
                        {navigationItems.map((item) => (
                            <li
                                key={item.name}
                                className={cn(
                                    'inline-block text-lg font-medium text-white transition-all hover:text-green-renovacom',
                                    item.isCurrent ? 'font-semibold' : 'font-normal',
                                )}
                            >
                                <Link
                                    prefetch={true}
                                    cacheFor={'10s'}
                                    viewTransition={true}
                                    href={item.href}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li className="flex items-center gap-4">
                            <Link aria-label="Enlace Instagram">
                                <InstagramIcon className="size-5 text-white transition-all hover:text-green-renovacom!" />
                            </Link>
                            <Link aria-label="Enlace LinkedIn">
                                <LinkedInIcon className="size-5 text-white transition-all hover:text-green-renovacom!" />
                            </Link>
                        </li>
                        <li>
                            <PrimaryLink
                                href="#contacto"
                                aria-label="Agendar una reunión"
                            >
                                Agendar una reunión
                            </PrimaryLink>
                        </li>
                    </ul>
                </nav>

                {/* Header on small screens */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        role="button"
                        onClick={handleToggleMenu}
                        aria-label="Toggle menu"
                        className="p-2"
                    >
                        <Bars3Icon className="size-8 text-white" />
                    </button>
                </div>
            </header>
            <div
                className={cn(
                    'fixed top-0 right-0 z-50 flex min-h-lvh w-[99%] flex-col gap-10 rounded-l-4xl border-l-2 border-white bg-gray-renovacom p-7 backdrop-blur-xl transition-all',
                    {
                        'translate-x-0': toggleMenu,
                        'translate-x-full': !toggleMenu,
                    },
                )}
            >
                <button
                    type="button"
                    role="button"
                    onClick={handleToggleMenu}
                    className="ml-auto"
                    aria-label="Close menu"
                >
                    <XMarkIcon className="size-8 text-white" />
                </button>
                <nav className="flex flex-col gap-6">
                    <ul className="flex flex-col gap-6">
                        {navigationItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={() => setToggleMenu(false)}
                                    className={cn('text-xl font-medium text-white hover:underline', item.isCurrent ? 'font-bold' : 'font-normal')}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="border-t border-white pt-6">
                        <PrimaryLink
                            href="#contacto"
                            className="block text-center"
                            aria-label="Agendar una reunión"
                        >
                            Agendar una reunión
                        </PrimaryLink>
                    </div>
                    <div className="flex gap-6 pt-6">
                        <Link>
                            <InstagramIcon className="size-7" />
                        </Link>
                        <Link>
                            <LinkedInIcon className="size-6" />
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};
export default Header;

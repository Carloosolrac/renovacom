import { Link } from '@inertiajs/react';
import useNavigation from '@/hooks/useNavigation';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';

const Footer = () => {
    const { navigationItems } = useNavigation();

    return (
        <footer className="relative overflow-hidden bg-black-renovacom py-20">
            <div className={cn(getWidthClasses(), 'grid grid-cols-2 gap-14 lg:grid-cols-4 lg:gap-0')}>
                <svg
                    className="right-0 z-0 hidden w-full! lg:absolute lg:-top-5 lg:block lg:scale-[1.1] xl:left-0 xl:scale-[1] 2xl:scale-[1.1]"
                    width="100%"
                    height="371"
                    viewBox="0 0 100% 371"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="100%"
                        y1="81"
                        y2="81"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                    />
                    <line
                        x1="100%"
                        y1="327"
                        y2="327"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                    />
                    <line
                        x1="90%"
                        y1="700"
                        x2="90%"
                        y2="1"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                    />
                    <line
                        x1="90.4%"
                        y1="327"
                        x2="89.6%"
                        y2="327"
                        stroke="#F8FEFF"
                        strokeWidth="2"
                    />
                    <line
                        x1="90%"
                        y1="334"
                        x2="90%"
                        y2="320"
                        stroke="#F8FEFF"
                        strokeWidth="2"
                    />
                    <line
                        x1="90.4%"
                        y1="81"
                        x2="89.6%"
                        y2="81"
                        stroke="#F8FEFF"
                        strokeWidth="2"
                    />
                    <line
                        x1="90%"
                        y1="88"
                        x2="90%"
                        y2="74"
                        stroke="#F8FEFF"
                        strokeWidth="2"
                    />
                </svg>

                <img
                    src="/assets/logo-footer.png"
                    alt="Logo Renovacom"
                    className="col-span-2 my-auto"
                />
                <div className="z-10 space-y-8 lg:mx-auto lg:w-1/2">
                    <h3 className="text-xl font-semibold text-white">Navegación</h3>
                    <nav>
                        <ul>
                            {navigationItems.map((item) => (
                                <li
                                    key={item.name}
                                    className="mb-4 text-lg text-white hover:text-green-renovacom"
                                >
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="z-10 space-y-8 lg:mx-auto lg:w-1/2">
                    <h3 className="text-xl font-semibold text-white">Contacto</h3>
                    <ul role="list">
                        <li
                            role="listitem"
                            className="mb-4 text-lg text-white hover:text-green-renovacom"
                        >
                            <Link href={'mailto:info@renovacom.cl'}>info@renovacom.cl</Link>
                        </li>
                        <li
                            role="listitem"
                            className="mb-4 text-lg text-white hover:text-green-renovacom"
                        >
                            <Link href={'tel:+56912345678'}>+569 1234 5678</Link>
                        </li>
                        <li
                            role="listitem"
                            className="mb-4 text-lg text-white hover:text-green-renovacom"
                        >
                            <Link
                                href={'https://www.linkedin.com/company/renovacom/'}
                                target="_blank"
                            >
                                LinkedIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

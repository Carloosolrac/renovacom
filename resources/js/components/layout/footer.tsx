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
                    className="right-0 hidden min-h-full min-w-full lg:absolute lg:-top-5 lg:-left-76 lg:block lg:scale-[1.1] xl:left-0 xl:scale-[1] 2xl:scale-[1.1]"
                    width="1440"
                    height="371"
                    viewBox="0 0 1440 371"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1440"
                        y1="81"
                        y2="81"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                    />
                    <line
                        x1="1440"
                        y1="327"
                        y2="327"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                    />
                    <line
                        x1="1402"
                        y1="430"
                        x2="1402"
                        y2="-4.37114e-08"
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                    />
                    <line
                        x1="1395"
                        y1="327"
                        x2="1409"
                        y2="327"
                        stroke="#F8FEFF"
                        strokeWidth="2"
                    />
                    <line
                        x1="1402"
                        y1="334"
                        x2="1402"
                        y2="320"
                        stroke="#F8FEFF"
                        strokeWidth="2"
                    />
                    <line
                        x1="1395"
                        y1="81"
                        x2="1409"
                        y2="81"
                        stroke="#F8FEFF"
                        strokeWidth="2"
                    />
                    <line
                        x1="1402"
                        y1="88"
                        x2="1402"
                        y2="74"
                        stroke="#F8FEFF"
                        strokeWidth="2"
                    />
                </svg>

                <img
                    src="/assets/logo-footer.png"
                    alt="Logo Renovacom"
                    className="col-span-2"
                />
                <div className="space-y-8 lg:mx-auto lg:w-1/2">
                    <h3 className="text-xl font-semibold text-white">Navegación</h3>
                    <nav>
                        <ul>
                            {navigationItems.map((item) => (
                                <li
                                    key={item.name}
                                    className="mb-4 text-lg text-white"
                                >
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="space-y-8 lg:mx-auto lg:w-1/2">
                    <h3 className="text-xl font-semibold text-white">Contacto</h3>
                    <ul role="list">
                        {['info@renovacom.cl', '+569 1234 5678', 'LinkedIn'].map((item) => (
                            <li
                                role="listitem"
                                key={item}
                                className="mb-4 text-lg text-white"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

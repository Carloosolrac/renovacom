import { Link } from '@inertiajs/react';
import useNavigation from '@/hooks/useNavigation';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';

const Footer = () => {
    const { navigationItems } = useNavigation();

    return (
        <footer className="bg-black-renovacom py-20">
            <div className={cn(getWidthClasses(), 'grid grid-cols-2 gap-14 lg:grid-cols-4 lg:gap-0')}>
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
                                role="item"
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

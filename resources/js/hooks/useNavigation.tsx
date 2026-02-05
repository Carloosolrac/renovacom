import { usePage } from '@inertiajs/react';
import { home } from '@/routes';

const useNavigation = () => {
    const { url } = usePage();

    const navigationItems = [
        {
            name: 'Inicio',
            href: home.get().url,
            isCurrent: url === home.get().url,
        },
        {
            name: 'Metodología',
            href: '#methodology',
            isCurrent: url === '#methodology',
        },
        {
            name: 'Servicios',
            href: '#services',
            isCurrent: url === '#services',
        },
    ];

    return {
        current: url,
        navigationItems,
    };
};

export default useNavigation;

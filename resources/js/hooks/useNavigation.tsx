import { usePage } from '@inertiajs/react';
import { home, metodologia, servicios } from '@/routes';

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
            href: metodologia.get().url,
            isCurrent: url === metodologia.get().url,
        },
        {
            name: 'Servicios',
            href: servicios.get().url,
            isCurrent: url === servicios.get().url,
        },
    ];

    return {
        current: url,
        navigationItems,
    };
};

export default useNavigation;

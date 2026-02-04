import { StarIcon } from '@/components/icons/icons';
import Banner from '@/components/ui/banner';
import AppLayout from '@/layout/app-layout';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';

const Home = () => {
    const txt = 'DE LA INGENIERÍA DE PROYECTOS A LA <span className="text-green-renovacom">INTELIGENCIA OPERATIVA</span>';

    return (
        <>
            <Banner
                title={txt}
                backgroundImage="/assets/hero-home.gif"
                buttonLink="#contacto"
                buttonText="Hablemos"
                characteristics={['Inteligencia operativa para activos renovables', 'Sistema de adquisición de datos autónoma']}
            />
            <section className={cn(getWidthClasses(), 'bg-white py-10')}>
                <ul
                    role="list"
                    className="flex flex-col flex-wrap items-center justify-around gap-8 text-3xl text-black-renovacom md:flex-row"
                >
                    {['Agilidad', 'Precisión', 'Seguridad', 'Autonomía'].map((item, index) => (
                        <>
                            <li
                                key={index}
                                className="flex items-center gap-4"
                            >
                                {item}
                            </li>
                            {index < 3 && (
                                <li>
                                    <StarIcon className="size-6 fill-black-renovacom" />
                                </li>
                            )}
                        </>
                    ))}
                </ul>
            </section>
        </>
    );
};

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Home;

import Banner from '@/components/ui/banner';
import AppLayout from '@/layout/app-layout';

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
        </>
    );
};

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Home;

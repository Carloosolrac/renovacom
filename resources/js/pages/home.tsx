import AppLayout from '@/layout/app-layout';

const Home = () => {
    return <div>Welcome to Renovacom!</div>;
};

Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;

export default Home;

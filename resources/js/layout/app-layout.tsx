import Header from '@/components/layout/header';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Debug Tailwind Breakpoints */}
            <div className="fixed top-2 left-2 z-50 rounded bg-black/80 px-2 py-1 text-xs font-semibold text-white">
                <span className="sm:hidden">xs</span>
                <span className="hidden sm:inline md:hidden">sm</span>
                <span className="hidden md:inline lg:hidden">md</span>
                <span className="hidden lg:inline xl:hidden">lg</span>
                <span className="hidden xl:inline 2xl:hidden">xl</span>
                <span className="hidden 2xl:inline">2xl</span>
            </div>

            <Header />
            <main className="flex-1">{children}</main>
            <footer></footer>
        </div>
    );
};

export default AppLayout;

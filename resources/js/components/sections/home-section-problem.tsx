import { cn } from '@/lib/utils';

const HomeSectionProblem = () => {
    return (
        <section
            className={cn('relative mx-auto flex h-[85lvh] flex-col items-center justify-center gap-6 overflow-hidden bg-cover bg-center')}
            style={{
                backgroundImage: `url(${'/assets/home/background-section-problem.png'})`,
            }}
        >
            <div className="flex items-center gap-6">
                <div className="card-left-in h-[75lvh] min-w-275 rounded-renovacom-xl bg-gray-renovacom"></div>
                <div className="h-[75lvh] min-w-275 rounded-renovacom-xl bg-gray-renovacom"></div>
                <div className="h-[75lvh] min-w-275 rounded-renovacom-xl bg-gray-renovacom"></div>
            </div>

            <div className="flex items-center gap-6">
                <div className="card-left-in h-[75lvh] min-w-275 rounded-renovacom-xl bg-gray-renovacom"></div>

                {/* MIDDLE INITIAL */}
                <div className="card-center-in flex h-[75lvh] max-w-275 min-w-275 items-center justify-center rounded-renovacom-xl bg-gray-renovacom px-5 uppercase">
                    <h3 className="text-center font-space-grotesk text-7xl leading-24 font-semibold text-white">
                        Automatizamos la captura y análisis de datos, <span className="text-green-renovacom">para optimizar la Operación.</span>
                    </h3>
                </div>

                <div className="card-right-in h-[75lvh] min-w-275 rounded-renovacom-xl bg-gray-renovacom"></div>
            </div>

            <div className="flex items-center gap-6">
                <div className="card-left-in h-[75lvh] min-w-275 rounded-renovacom-xl bg-gray-renovacom"></div>
                <div className="card-bottom-in h-[75lvh] min-w-275 rounded-renovacom-xl bg-gray-renovacom"></div>
                {/* LEFT TO TOP */}
                <div className="card-bottom-to-top-in flex h-[75lvh] min-w-275 items-center justify-center rounded-renovacom-xl bg-gray-renovacom">
                    <h3 className="max-w-3xl text-justify font-space-grotesk text-5xl leading-16 text-white">
                        Renovacom implementa un{' '}
                        <span className="text-green-renovacom">sistema de adquisición de datos autónoma y análisis con IA</span> que permite detectar
                        y clasificar daños en 48 horas.
                    </h3>
                </div>
            </div>

            <div className="card-bottom-bottom-in absolute top-0 left-1/2 h-[75lvh] min-w-275 -translate-x-1/2 rounded-renovacom-xl bg-gray-renovacom"></div>
        </section>
    );
};

export default HomeSectionProblem;

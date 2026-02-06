import PrimaryBlackLink from '@/components/ui/primary-black-link';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';
import Title from '../ui/title';

const LayoutForm = () => {
    return (
        <section
            className="space-y-10 border-t-2 border-gray-renovacom pt-10"
            id="contacto"
        >
            <div className={cn(getWidthClasses(), 'text-center')}>
                <Title className="mx-auto xl:max-w-5/6">Hablemos y coordinemos una reunión</Title>
            </div>
            <div
                className="bg-cover bg-center py-10"
                style={{
                    backgroundImage: "url('/assets/background-form.png')",
                }}
            >
                <div className={cn(getWidthClasses(), 'flex items-center justify-end')}>
                    <form className="w-full space-y-6 rounded-3xl border-2 border-white bg-gray-renovacom p-5 lg:w-1/2 lg:p-10">
                        {/* Nombre y Email */}
                        <div className="grid gap-6 lg:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-white">Nombre *</label>
                                <input
                                    type="text"
                                    placeholder="Juan Pérez"
                                    className="rounded-full border-2 border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-white">Email Corporativo *</label>
                                <input
                                    type="email"
                                    placeholder="ejemplo@email.com"
                                    className="rounded-full border-2 border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Teléfono y Servicio */}
                        <div className="grid gap-6 lg:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-white">Teléfono *</label>
                                <input
                                    type="tel"
                                    placeholder="+56 9 1234 5678"
                                    className="rounded-full border-2 border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-white">Servicio *</label>
                                <select
                                    className="cursor-pointer appearance-none rounded-full border-2 border-white bg-transparent px-5 py-4 text-white transition-colors focus:border-green-renovacom focus:outline-none"
                                    defaultValue="solar"
                                >
                                    <option
                                        value=""
                                        disabled
                                        hidden
                                    >
                                        Selecciona un servicio
                                    </option>
                                    <option value="solar">Inspección Solar</option>
                                    <option value="eolica">Inspección Eólica</option>
                                    <option value="ambos">Ambos servicios</option>
                                </select>
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-white">Mensaje *</label>
                            <textarea
                                placeholder="Déjanos un mensaje con los detalles de tu consulta técnica."
                                rows={6}
                                className="resize-none rounded-3xl border-2 border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none"
                            />
                        </div>

                        {/* Botón */}
                        <div className="flex justify-start pt-4">
                            <PrimaryBlackLink href="#contacto">Hablemos</PrimaryBlackLink>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LayoutForm;

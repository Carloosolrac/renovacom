import PrimaryBlackLink from '@/components/ui/primary-black-link';
import { cn } from '@/lib/utils';
import { getWidthClasses } from '@/utils/utils';
import InputSelect from '../ui/input-select';
import Title from '../ui/title';

const LayoutForm = ({ withCTA = true }: { withCTA?: boolean }) => {
    return (
        <section
            className={cn('space-y-10 pt-10', {
                'border-t-2 border-gray-renovacom': withCTA,
            })}
            id="contacto"
        >
            {withCTA && (
                <div className={cn(getWidthClasses(), 'text-center')}>
                    <Title className="mx-auto xl:max-w-5/6">Hablemos y coordinemos una reunión</Title>
                </div>
            )}

            <div
                className="bg-cover bg-center py-10"
                style={{
                    backgroundImage: "url('/assets/background-form.png')",
                }}
            >
                <div className={cn(getWidthClasses(), 'flex items-center justify-end')}>
                    <form className="w-full space-y-6 rounded-3xl border border-white bg-gray-renovacom p-5 lg:w-1/2 lg:p-10">
                        {/* Nombre y Email */}
                        <div className="grid gap-6 lg:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-white">Nombre *</label>
                                <input
                                    type="text"
                                    placeholder="Juan Pérez"
                                    className="rounded-full border border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white">Email Corporativo *</label>
                                <input
                                    type="email"
                                    placeholder="ejemplo@email.com"
                                    className="rounded-full border border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Teléfono y Servicio */}
                        <div className="grid gap-6 lg:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-white">Teléfono *</label>
                                <input
                                    type="tel"
                                    placeholder="+56 9 1234 5678"
                                    className="rounded-full border border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-white"
                                    id="service"
                                >
                                    Servicio *
                                </label>
                                <InputSelect
                                    value={null}
                                    onChange={() => {}}
                                    options={[
                                        { value: 'solar', label: 'Inspección Solar' },
                                        { value: 'eolica', label: 'Inspección Eólica' },
                                        { value: 'ambos', label: 'Ambos servicios' },
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white">Mensaje *</label>
                            <textarea
                                placeholder="Déjanos un mensaje con los detalles de tu consulta técnica."
                                rows={6}
                                className="resize-none rounded-3xl border border-white bg-transparent px-5 py-4 text-white placeholder-white/70 transition-colors focus:border-green-renovacom focus:outline-none"
                            />
                        </div>

                        {/* Botón */}
                        <div className="flex justify-start pt-4">
                            <PrimaryBlackLink
                                href="#contacto"
                                aria-label="Contactar para hablar sobre tu consulta"
                            >
                                Hablemos
                            </PrimaryBlackLink>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LayoutForm;

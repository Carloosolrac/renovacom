import { cn } from '@/lib/utils';

export interface CardStatisticsProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
    delay?: number;
}

const CardStatistics = ({ title, description, icon, className, delay }: CardStatisticsProps) => {
    return (
        <div
            role="listitem"
            data-aos="fade-up"
            data-aos-delay={delay}
            className={cn('flex h-75 w-full flex-col justify-start gap-6 rounded-3xl border border-white bg-black-renovacom p-8', className)}
        >
            <img
                src={icon}
                alt={title}
                className="size-20 max-h-20"
            />
            <h3 className="font-space-grotesk text-4xl font-semibold text-white uppercase xl:text-6xl">{title}</h3>
            <p className="text-xl text-white">{description}</p>
        </div>
    );
};

export default CardStatistics;

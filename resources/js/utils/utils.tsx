export const getWidthClasses = () => {
    return 'max-w-sm md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto w-full';
};

export type ButtonSize = 'sm' | 'md' | 'lg';
export const getButtonSize = (size: ButtonSize) => {
    switch (size) {
        case 'sm':
            return 'px-3 py-1 text-xs tracking-wide';
        case 'md':
            return 'px-4 py-2 text-base';
        case 'lg':
            return ' px-5 py-3.5 xl:text-xl';
        default:
            return 'px-4 py-2 text-base';
    }
};

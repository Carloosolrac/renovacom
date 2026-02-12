import { useState } from 'react';

interface InputSelectProps {
    options: { value: string; label: string }[];
    value: string | null;
    onChange: (value: string) => void;
    placeholder?: string;
}

const InputSelect = ({ options, value, onChange, placeholder }: InputSelectProps) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                aria-label="Seleccionar una opción"
                className="mt-2 w-full cursor-pointer appearance-none rounded-full border border-white bg-transparent px-5 py-4 text-white transition-colors focus:border-green-renovacom focus:outline-none"
                onClick={() => setToggle(!toggle)}
            >
                {options.find((option) => option.value === value)?.label || placeholder || 'Selecciona una opción'}
            </button>
            {toggle && (
                <ul className="button-appear absolute top-full mt-1 w-full overflow-hidden rounded-3xl border border-white bg-black-renovacom shadow">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="cursor-pointer px-5 py-4 text-white hover:bg-gray-renovacom"
                            onClick={() => onChange(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default InputSelect;

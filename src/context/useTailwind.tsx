import React, { useContext, createContext, ReactNode } from "react";
import { useDeviceContext, useAppColorScheme, create, Style } from "twrnc";


import { RnColorScheme } from "twrnc";

interface TailwindContextProps {
    tw: (classNames: TemplateStringsArray) => Style; 
    colorScheme: string; 
    toggleColorScheme: () => void; 
    setColorScheme: (scheme: RnColorScheme) => void;
}


export const TailwindContext = createContext<TailwindContextProps | undefined>(undefined);

export function useTailwind(): TailwindContextProps {
    const context = useContext(TailwindContext);
    if (!context) {
        throw new Error("useTailwind must be used within a TailwindProvider");
    }

    return context;
}

interface TailwindProviderProps {
    children: ReactNode;
}

export function TailwindProvider({ children }: TailwindProviderProps) {
    const tw = create(require(`../../tailwind.config.js`));

    useDeviceContext(tw, {
        observeDeviceColorSchemeChanges: false,
        initialColorScheme: `light`,
    });

    const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);

    return (
        <TailwindContext.Provider value={{ tw, colorScheme: colorScheme || 'light', toggleColorScheme, setColorScheme }}>
            {children}
        </TailwindContext.Provider>
  );
}

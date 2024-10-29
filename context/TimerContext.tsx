import { Dispatch, SetStateAction,createContext, useState } from "react";

interface TimerContextType{
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>
}

export const TimeContext = createContext<TimerContextType>({
    duration: 30,
    setDuration: () => {}
});

interface TimerProviderProps {
    children: React.ReactNode;
}

const TimerProvider = ({children}: TimerProviderProps) => {
    const [duration, setDuration] = useState(30);

    return (
        <TimeContext.Provider value={{ duration, setDuration }}>
            {children}
        </TimeContext.Provider>
    );
}

export default TimerProvider;
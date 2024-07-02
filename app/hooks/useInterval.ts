import { useEffect, useRef } from "react";

export default function useInterval(callback: () => void, delay: number) {
    const callbackRef = useRef(() => {});

    useEffect(() => {
        callbackRef.current = callback;
    });
    useEffect(() => {
        const interval = setInterval(() => callbackRef.current(), delay);
        return () => clearInterval(interval);
    },[]);
}
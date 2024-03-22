"use client"
import React, { useState, useMemo, useEffect } from "react";

export function useIsInViewport(ref: React.RefObject<any>) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const isBrowser = () => typeof window !== 'undefined';

    const observer = useMemo(
        () => isBrowser() ?
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            ) : null,
        [],
    );

    useEffect(() => {
        observer?.observe(ref.current);

        return () => {
            observer?.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}
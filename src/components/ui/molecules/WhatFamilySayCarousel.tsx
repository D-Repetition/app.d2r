"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { testimonies } from "@/constants/homeSectionsData";
import WhatFamilySayCard from "./WhatFamilySayCard";
import RoundButton from "../atomes/RoundButton";

const AUTOPLAY_DELAY = 7000;

const WhatFamilySayCarousel = () => {
    const [active, setActive] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const stopAutoplay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startAutoplay = useCallback(() => {
        stopAutoplay();

        intervalRef.current = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonies.length);
        }, AUTOPLAY_DELAY);
    }, [stopAutoplay]);

    useEffect(() => {
        startAutoplay();

        return stopAutoplay;
    }, [startAutoplay, stopAutoplay]);

    const prev = () => {
        setActive((prev) => (prev - 1 + testimonies.length) % testimonies.length);
        startAutoplay();
    };

    const next = () => {
        setActive((prev) => (prev + 1) % testimonies.length);
        startAutoplay();
    };

    const visible = useMemo(() => {
        const previous =
            testimonies[(active - 1 + testimonies.length) % testimonies.length];

        const current = testimonies[active];

        const following =
            testimonies[(active + 1) % testimonies.length];

        return [previous, current, following];
    }, [active]);
    return (
        <div className="flex flex-col items-center gap-[12vh]"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
        >
            <div className="flex items-end justify-center gap-8 overflow-hidden px-8">
                {visible.map((testimony, index) => (
                    <div
                        key={testimony.full_name}
                        className={[
                            "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            index === 1
                                ? "scale-100"
                                : "scale-90",
                        ].join(" ")}
                    >
                        <WhatFamilySayCard {...testimony} />
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-4">
                <RoundButton
                    direction="left"
                    isActive
                    onClick={prev}
                />

                <RoundButton
                    direction="right"
                    isActive
                    onClick={next}
                />
            </div>
        </div>
    );
};

export default WhatFamilySayCarousel;
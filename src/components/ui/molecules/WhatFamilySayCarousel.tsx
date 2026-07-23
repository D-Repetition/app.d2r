"use client";

import { useMemo, useState } from "react";
import { testimonies } from "@/constants/homeSectionsData";
import WhatFamilySayCard from "./WhatFamilySayCard";
import RoundButton from "../atomes/RoundButton";

const WhatFamilySayCarousel = () => {
    const [active, setActive] = useState(0);

    const prev = () =>
        setActive((p) => (p - 1 + testimonies.length) % testimonies.length);

    const next = () =>
        setActive((p) => (p + 1) % testimonies.length);

    const visible = useMemo(() => {
        const previous =
            testimonies[(active - 1 + testimonies.length) % testimonies.length];

        const current = testimonies[active];

        const following =
            testimonies[(active + 1) % testimonies.length];

        return [previous, current, following];
    }, [active]);

    return (
        <div className="flex flex-col items-center gap-[12vh]">
            <div className="flex items-end justify-center gap-8 overflow-hidden px-8">
                {visible.map((testimony, index) => (
                    <div
                        key={testimony.full_name}
                        className={[
                            "transition-all duration-500 ease-in-out",
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
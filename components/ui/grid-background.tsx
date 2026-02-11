import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-background dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0">
            <div
                className={cn(
                    "absolute inset-0",
                    // Light mode gradient
                    "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]",
                    // Dark mode gradient
                    "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    "bg-size-[40px_40px]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-background"></div>

        </div>
    );
}

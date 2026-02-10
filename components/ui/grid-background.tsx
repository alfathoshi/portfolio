import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.3] bg-grid-black/[0.2] absolute top-0 left-0">
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-size-[40px_40px]",
                    "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>

        </div>
    );
}

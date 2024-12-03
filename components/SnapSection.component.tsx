
import React, { MutableRefObject } from "react";

export function SnapSection({ children, id, height = '100vh', ref = null }: { children: React.ReactNode, id?: string, height?: string, ref?: MutableRefObject<HTMLDivElement> | null }) {
    return (
        <div id={id} className="snap-start snap-always overflow-auto w-full" style={{height}} ref={ref} >
            <div className="flex items-center justify-center h-full flex-col" >
                {children}
            </div>
        </div>
    )
}
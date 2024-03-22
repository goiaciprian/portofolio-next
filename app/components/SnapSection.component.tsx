import { Box } from "@chakra-ui/react";
import { MutableRefObject, RefObject } from "react";

export function SnapSection({ children, id, height = '100vh', ref = null }: { children: React.ReactNode, id?: string, height?: string, ref?: MutableRefObject<HTMLDivElement> | null }) {
    return (
        <Box id={id} height={height} scrollSnapAlign={'start'} scrollSnapStop={'always'} overflow={'auto'} width={'100%'} ref={ref} >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }} >
                {children}
            </Box>
        </Box>
    )
}
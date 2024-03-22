import { Box } from "@chakra-ui/react";
import links from '@/app/utils/links.navigation';

export function Navigation() {
    return (
        <Box sx={{ height: '10vh', width: '100%', position: 'fixed', top: 0, left: 0, display: 'flex', justifyContent: 'flex-end' }} >
            <Box sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', height: '100%', display: 'flex' }} >
                {links}
            </Box>
        </Box>
    )
}
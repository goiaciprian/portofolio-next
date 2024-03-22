import { SnapSection } from "./components/SnapSection.component";
import { AbsoluteCenter, Box, Divider, Text } from '@chakra-ui/react'

export default function NotFound() {
    return (
        <SnapSection height="65vh" >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%', alignItems: 'center' }} >
                <Text as={"h1"} variant={'v-big'}>Page not found</Text>
                <Box position={'relative'} padding={10} width={'100%'} >
                    <Divider bg={'brand.300'} orientation="horizontal" width={'100%'} />
                    <AbsoluteCenter bg={"brand.black"} >
                        <Text as={'h1'} variant='v-big'>
                            404
                        </Text>
                    </AbsoluteCenter>
                </Box>
            </Box>
        </SnapSection>
    )
}
import { Box, Text } from "@chakra-ui/react";
import linksNavigation from "@/app/utils/links.navigation";
import { SnapSection } from "@/app/components/SnapSection.component";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { TbBrandVercel } from "react-icons/tb";

export function Footer() {
    return (
        <SnapSection height="25vh" >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }} >
                <Box sx={{ display: 'flex', justifyContent: 'space-evenlty', margin: '5vh' }} >
                    {linksNavigation}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5vh' }} >
                    <Text as={'a'} href="https://www.linkedin.com/in/ciprian-goia-951537197/" target="_blank">
                        <BiLogoLinkedinSquare size={40} />
                    </Text>
                    <Text as={'a'} href='https://www.linkedin.com/in/ciprian-goia-951537197/' target="_blank">
                        <BiLogoGithub size={40} />
                    </Text>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2', padding: '1rem' }} >
                    <Text>Powered by</Text>
                    <Text as='a' href="https://vercel.com" target="_blank">
                        <TbBrandVercel size={25} />
                    </Text>
                </Box>
                <Box>
                    <Text>Disclaimer: Work in progress</Text>
                </Box>
            </Box>
        </SnapSection>
    )
}
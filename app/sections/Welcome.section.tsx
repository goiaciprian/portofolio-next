import { Box } from "@chakra-ui/react";
import { SnapSection } from "@/app/components/SnapSection.component";
import { StyledTypeAnimation } from "@/app/components/TypedAnimation.component";

export function WelcomeSection() {
    return (
        <SnapSection id="welcome">
            <Box flexDirection={'column'}>
                <StyledTypeAnimation
                    sequence={['Goia Ciprian']}
                    speed={25}
                    repeat={0}
                    cursor={false}
                    style={{ margin: 'auto' }}
                />
                <Box sx={{ flexDirection: 'row' }}>
                    <StyledTypeAnimation
                        italic
                        weight={400}
                        sequence={['Frontend', 2000, 'Backend', 2000]}
                        speed={25}
                        repeat={Infinity}
                    />
                    <StyledTypeAnimation sequence={['Developer']} speed={25} repeat={0} cursor={false} />
                </Box>
            </Box>
            {/* {!!inViewport && !inViewport && <BackTop />} */}
        </SnapSection>
    )
}
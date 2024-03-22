import { Box, Text } from "@chakra-ui/react";
import { SnapSection } from "@/app/components/SnapSection.component";
import { StyledTypeAnimation } from "@/app/components/TypedAnimation.component";
import { Form } from "@/app/components/Form.component";

export function Contact() {
    return (
        <SnapSection id="contact" >
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', flexDirection: 'column', gap: '5vh', justifyContent: 'center' }}>
                <Box>
                    <StyledTypeAnimation
                        style={{ width: '300px' }}
                        italic
                        weight={400}
                        sequence={['OPEN', 1500, 'NOT OPEN', 1500]}
                        repeat={Infinity}
                        speed={25}
                    />
                    <Text sx={{ display: 'inline-block', fontWeight: 'bold' }} variant={'v-big'} >For Hire</Text>
                </Box>
                <Box>
                    <Text sx={{ fontStyle: 'italic' }} variant={'big'}>
                        Thanks for checking me out{' '}
                        <span
                            role='img'
                            aria-label='wink-emoji'
                            aria-labelledby='wink-emoji'
                            style={{
                                fontStyle: 'normal'
                            }}>
                            😉
                        </span>
                        . If you want to contact me for some work or feedback now is the time
                    </Text>
                </Box>
                <Box sx={{ width: '100%', padding: '0 35%' }} >
                    <Form />
                </Box>
            </Box>
        </SnapSection>
    )
}
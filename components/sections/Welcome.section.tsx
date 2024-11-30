import { SnapSection } from "@/components/SnapSection.component";
import { StyledTypeAnimation } from "@/components/TypedAnimation.component";

export function WelcomeSection() {
    return (
        <SnapSection id="welcome">
            <div className="flex-col">
                <StyledTypeAnimation
                    sequence={['Goia Ciprian']}
                    speed={25}
                    repeat={0}
                    cursor={false}
                    style={{ margin: 'auto' }}
                />
                <div className="flex-row">
                    <StyledTypeAnimation
                        italic
                        weight={400}
                        sequence={['Fullstack', 2000]}
                        speed={25}
                        repeat={Infinity}
                    />
                    <StyledTypeAnimation sequence={['Developer']} speed={25} repeat={0} cursor={false} />
                </div>
            </div>
            {/* {!!inViewport && !inViewport && <BackTop />} */}
        </SnapSection>
    )
}
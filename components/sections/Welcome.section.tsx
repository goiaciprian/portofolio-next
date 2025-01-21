import { SnapSection } from "@/components/SnapSection.component";
import { StyledTypeAnimation } from "@/components/TypedAnimation.component";

export function WelcomeSection() {
    return (
        <SnapSection id="welcome">
            <div className="flex flex-col gap-5">
                <StyledTypeAnimation
                    text="Goia Ciprian"
                    className="font-bold text-7xl"
                />
                <StyledTypeAnimation
                    text="Fullstack Developer"
                    className="font-normal text-4xl"
                />
            </div>
            {/* {!!inViewport && !inViewport && <BackTop />} */}
        </SnapSection>
    )
}
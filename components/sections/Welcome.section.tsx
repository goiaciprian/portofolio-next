import { SnapSection } from "@/components/SnapSection.component";
import { StyledTypeAnimation } from "@/components/TypedAnimation.component";

export function WelcomeSection() {
    return (
        <SnapSection id="welcome">
            <header className="flex-col">
                <h1>
                    <StyledTypeAnimation
                        sequence={['Goia Ciprian']}
                        speed={25}
                        repeat={0}
                        cursor={false}
                        style={{ margin: 'auto' }}
                    />
                </h1>
                <div className="flex-row">
                    <h2>
                        <StyledTypeAnimation
                            italic
                            weight={400}
                            sequence={['Fullstack', 2000]}
                            speed={25}
                            repeat={Infinity}
                        />
                        <StyledTypeAnimation 
                            sequence={['Developer']} 
                            speed={25} 
                            repeat={0} 
                            cursor={false} 
                        />
                    </h2>
                </div>
            </header>
        </SnapSection>
    )
}
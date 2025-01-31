"use server"

import { SnapSection } from "@/components/SnapSection.component";
import { StyledTypeAnimation } from "@/components/TypedAnimation.component";
import { Form } from "@/components/Form.component";
import {getWorkStatus} from "@/app/actions";


export async function Contact() {
    const settings = await getWorkStatus()

    return (
        <SnapSection id="contact">
            <div className="flex items-center h-full flex-col gap-4 sm:gap-[5vh] justify-center px-4 sm:px-6 md:px-8 w-full max-w-7xl mx-auto">
                <div className="text-center">
                    <StyledTypeAnimation
                        style={{ width: '300px' }}
                        italic
                        weight={400}
                        sequence={[settings.workStatus, 1500]}
                        repeat={Infinity}
                        speed={25}
                    />
                    <p className="inline-block font-bold text-base sm:text-lg md:text-xl">For Hire</p>
                </div>
                <div className="text-center px-4 sm:px-6">
                    <p className="italic text-sm sm:text-base md:text-lg">
                        Thank you for visiting! Feel free to reach out with any work opportunities or feedback using the form below.
                    </p>
                    <p className="italic text-sm sm:text-base md:text-lg">You can also reach me at <a className="text-moonstone hover:drop-shadow-moonstone" href="mailto:contact@cipriang-software.work">contact@cipriang-software.work</a></p>
                </div>
                <div className="w-full px-4 sm:px-[15%] md:px-[20%] lg:px-[30%]">
                    <Form />
                </div>
            </div>
        </SnapSection>
    )
}
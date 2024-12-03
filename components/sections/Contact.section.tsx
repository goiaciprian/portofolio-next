import { SnapSection } from "@/components/SnapSection.component";
import { StyledTypeAnimation } from "@/components/TypedAnimation.component";
import { Form } from "@/components/Form.component";
import {getWorkStatus} from "@/app/actions";

export async function Contact() {

    const settings = await getWorkStatus()

    return (
        <SnapSection id="contact" >
            <div className="flex items-center h-full flex-col gap-[5vh] justify-center">
                <div>
                    <StyledTypeAnimation
                        style={{ width: '300px' }}
                        italic
                        weight={400}
                        sequence={[settings.workStatus, 1500]}
                        repeat={Infinity}
                        speed={25}
                    />
                    <p className="inline-block font-bold md:text-lg lg:text-lg ">For Hire</p>
                </div>
                <div>
                    <p className="italic md:text-lg lg:text-lg ">
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
                    </p>
                </div>
                <div className="w-full px-[30%]">
                    <Form />
                </div>
            </div>
        </SnapSection>
    )
}
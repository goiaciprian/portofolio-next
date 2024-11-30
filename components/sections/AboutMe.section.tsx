import { SnapSection } from "@/components/SnapSection.component";
import { Modal } from "../modal";

const moreAboutMe = [
    "Over the past 6 years, I've immersed myself in the world of coding, with 2 of those years being spent at impressive companies like Trimble and Ensemble Software. Those experiences weren't just about work; they were about soaking in knowledge from experts and honing my skills in real-world scenarios.\n",
    'I also dedicated 2 years to being a full-stack developer for my college. It was more than just a job; it was a chance to contribute to my academic community while refining my craft. This year, I proudly donned the cap and gown, marking the completion of my faculty studies in electrical engineering and computer science. My academic journey has provided me with a solid foundation to build upon in the dynamic field of technology.\n',
    "Curiosity fuels my passion. I'm always eager to learn and dive into new subjects. Conversations about cutting-edge concepts and innovative ideas are my jam. Whether it's a deep dive into the intricacies of machine learning or dissecting the philosophy behind user experience design, count me in.\n",
    "But wait, there's more to me than just code. I have a soft spot for the art of cinematography. The magic of movies and TV series never fails to captivate me. From heartwarming classics to mind-bending thrillers, I appreciate the power of storytelling through the lens.\n",
    "So, let's connect! Whether it's about programming, tech, or sharing recommendations for the latest binge-worthy series, I'm all ears. Join me in exploring the intersection of creativity and technology as we embark on a journey of discovery."
];

export function AboutMe() {
    return (
        <SnapSection id="aboutme" >
            <div className="flex flex-col items-center justify-center p-[10vh] gap-[10vh]">
                <p  className="leading-[2.5]" >
                    Hey there! I&apos;m a 24-year-old programmer hailing from the vibrant land of Romania. For
                    the past 6 years, I&apos;ve been immersed in the world of coding. I&apos;ve spent time at
                    companies like Trimble and Ensemble Software, as well as 2 years as a full stack
                    developer during my college years. This year, I proudly completed my studies in
                    electrical engineering and computer science. Curiosity drives me—I&apos;m always eager to
                    learn and discuss new ideas. Beyond tech, I&apos;m a huge fan of both movies and TV series.
                    The art of cinematography never ceases to amaze me.
                </p>
                <Modal
                    closeButtonText="Close"
                    contentType="text"
                    headerText="More about me"
                    openButtonText="More about me"
                    text={moreAboutMe}
                />
            </div>
        </SnapSection>
    )
}
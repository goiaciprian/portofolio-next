import { SnapSection } from "@/components/SnapSection.component";
import { Modal } from "../modal";

const sinceMyBirthday = Math.floor((Date.now() - (new Date('03/13/2000')).getTime()) / 31536000000);
const sinceStartedCodding = Math.floor((Date.now() - (new Date('03/13/2018')).getTime()) / 31536000000);
const sinceStartedWorking = Math.floor((Date.now() - (new Date('03/13/2021')).getTime()) / 31536000000);

const moreAboutMe = [
    `Over the past ${sinceStartedCodding} years, I've immersed myself in the world of coding, with ${sinceStartedWorking} of those years being spent at impressive companies like Trimble and Ensemble Software. Those experiences weren't just about work; they were about soaking in knowledge from experts and honing my skills in real-world scenarios.`,
    'I also dedicated 2 years to being a full-stack developer for my college. It was more than just a job; it was a chance to contribute to my academic community while refining my craft. This year, I proudly donned the cap and gown, marking the completion of my faculty studies in electrical engineering and computer science. My academic journey has provided me with a solid foundation to build upon in the dynamic field of technology.\n',
    "Curiosity fuels my passion. I'm always eager to learn and dive into new subjects. Conversations about cutting-edge concepts and innovative ideas are my jam. Whether it's a deep dive into the intricacies of machine learning or dissecting the philosophy behind user experience design, count me in.\n",
    "But wait, there's more to me than just code. I have a soft spot for the art of cinematography. The magic of movies and TV series never fails to captivate me. From heartwarming classics to mind-bending thrillers, I appreciate the power of storytelling through the lens.\n",
    "So, let's connect! Whether it's about programming, tech, or sharing recommendations for the latest binge-worthy series, I'm all ears. Join me in exploring the intersection of creativity and technology as we embark on a journey of discovery."
];

export function AboutMe() {
    return (
      <SnapSection id="aboutme">
          <div className="flex flex-col items-center justify-center p-[10vh] gap-[10vh] md:max-w-[70vw] lg:max-w-[70vw]">
              <p className=" md:text-lg lg:text-lg md:leading-[2.5] xl:leading-[2.5] 2xl:leading-[2.5]">
                  Hey there! I&apos;m a {sinceMyBirthday}-year-old programmer hailing from the vibrant land of Romania. For
                  the past {sinceStartedCodding} years, I&apos;ve been immersed in the world of coding. I&apos;ve spent time at
                  companies like <a className='underline' href='https://www.trimble.com/en'>Trimble</a> and <a
                className="underline" href='https://www.ensemblesoftware.ro/'>Ensemble Software</a>, as well as 2 years
                  as a full stack
                  developer during my college years. I proudly completed my studies in
                  electrical engineering and computer science. Curiosity drives me—I&apos;m always eager to
                  learn and discuss new ideas. Beyond tech, I&apos;m a huge fan of movies, TV series.
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
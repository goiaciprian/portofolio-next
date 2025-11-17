import { InfoPin } from "@portofolio/ui/InfoPin";
import { Skills } from "client/components/Skills";
import { Button } from "@portofolio/ui/Button";
import { Contact } from "client/components/Contact";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="px-10 py-25 lg:py-50 h-full">
      <section className="grid gap-x-10 gap-y-10 grid-cols-[2fr_1fr] md:grid-cols-2 ">
        <div className="place-items-end">
          <div className="items-end">
            <h1 className="text-4xl lg:text-6xl font-bold flex flex-col items-end">
              <span>{"Hi, I'm"}</span>
              <span className="text-business-moonstone font-extrabold text-end">
                Goia Ciprian
              </span>
            </h1>
            <div className="py-4 lg:py-8 place-items-end">
              <div>
                <InfoPin iconName="code" text="Software Engineer" />
                <InfoPin iconName="map-pin" text="Based in Romania" />
                <InfoPin
                  iconName="calendar"
                  text={`${new Date().getFullYear() - 2021}+ years of experience`}
                />
              </div>
            </div>
            <div className="place-items-end pb-3">
              <p className="font-semibold text-xl lg:text-3xl max-w-110 text-end">
                Passionate about programming for over{" "}
                {new Date().getFullYear() - 2020} years.
              </p>
            </div>
            <div className="place-items-end pt-5">
              <div className="flex gap-3 flex-wrap justify-end">
                <div>
                  <Button
                    text="Preview CV"
                    as="a"
                    href="/Ciprian_Goia_Fullstack_Engineer_CV.pdf"
                    icon="file"
                    variant="secondary"
                    target="_blank"
                  />
                </div>
                <div>
                  <Button
                    text="Get in touch"
                    as="a"
                    href="mailto:contact@cipriang-software.work"
                    icon="mail"
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-15">
            <h1 className="hidden lg:block lg:text-5xl font-bold items-end">
              Experience
            </h1>
          </div>
        </div>
        <div className="w-fit pt-1">
          <Skills />
          <Contact />
        </div>
      </section>
      <div className="lg:hidden place-self-center">
        <h1 className="text-3xl font-bold">Experience</h1>
      </div>
      <section className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 mt-10">
        <div className="max-w-fit lg:place-self-end">
          <div className="flex flex-col gap-5">
            <div className="place-items-center lg:place-items-end">
              <Link
                href="https://www.ensemblesoftware.ro/"
                rel="noreferrer"
                target="_blank"
                className="block hover:drop-shadow-moonstone"
              >
                <Image
                  src="/ensemble.svg"
                  width="155"
                  height="200"
                  alt="ensemble"
                />
              </Link>
            </div>
            <p className="font-semibold lg:text-xl max-w-100">
              Maintenance and development of new features with a focus on
              performance and scalability. Predominantly working with ReactJS,
              NestJS, and AWS services.
            </p>
          </div>
        </div>
        <div className="max-w-fit lg:place-self-start">
          <div className="flex flex-col gap-5">
            <div className="place-items-center lg:place-items-start">cd 
              <Link
                href="https://www.trimble.com/en"
                rel="noreferrer"
                target="_blank"
                className="block hover:drop-shadow-moonstone"
              >
                <Image
                  src="/trimble.svg"
                  width="135"
                  height="200"
                  alt="ensemble"
                />
              </Link>
            </div>
            <p className="font-semibold lg:text-xl max-w-100">
              Prioritizing the implementation of new features and testing them
              using technologies such as Angular and .NET Core.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

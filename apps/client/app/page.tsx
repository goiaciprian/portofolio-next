import { InfoPin } from "@portofolio/ui/InfoPin";
import { Skills } from "client/components/Skills";
import { Button } from "@portofolio/ui/Button";
import { Contact } from "client/components/Contact";

export default function Page() {
  return (
    <>
      <main className="grid place-items-center py-50 h-full">
        <div className="flex gap-25 max-w-3/4">
          <div className="items-end w-2/4">
            <h1 className="text-6xl font-bold flex flex-col items-end">
              <span>{"Hi, I'm"}</span>
              <span className="text-business-moonstone font-extrabold text-end">
                Goia Ciprian
              </span>
            </h1>
            <div className="py-8 place-items-end">
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
              <p className="font-semibold text-3xl max-w-110 text-end">
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
                    href="/cv.pdf"
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
            {/* <div className="mt-20">
              <div className="place-items-end">
                <h1 className="text-5xl font-bold items-end">Experience</h1>
              </div>
              <div className="w-2/4">
                <div className="flex flex-col gap-5 pt-15">
                  <div className="place-items-center">
                    <Image
                      src="/ensemble.svg"
                      width="175"
                      height="200"
                      alt="ensemble"
                    />
                  </div>
                  <p className="font-semibold text-xl">
                    Maintenance and development of new features with a focus on
                    performance and scalability. Predominantly working with
                    ReactJS, NestJS, and AWS services.
                  </p>
                </div>
              </div>
              <div className="w-2/4">
                <div className="flex flex-col gap-5 pt-15">
                  <div className="place-items-center">
                    <Image
                      src="/trimble.svg"
                      width="175"
                      height="200"
                      alt="ensemble"
                    />
                  </div>
                  <p className="font-semibold text-xl">
                    Prioritizing the implementation of new features and testing
                    them using technologies such as Angular and .NET Core.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="w-fit">
            <Skills />
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}

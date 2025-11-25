import { InfoPin } from "@portofolio/ui/InfoPin";
import { Skills } from "client/components/Skills";
import { Button } from "@portofolio/ui/Button";
import { Contact } from "client/components/Contact";
import { Suspense } from "react";
import { PreviewCVButton } from "client/components/PreviewCV";
import { Experience } from "client/components/Experience";
import { Loader } from "@portofolio/ui/Loader";

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
                  <Suspense
                    fallback={
                      <Button
                        text="Preview CV"
                        as="a"
                        href=""
                        loading
                        icon="file"
                        variant="secondary"
                        target="_blank"
                      />
                    }
                  >
                    <PreviewCVButton />
                  </Suspense>
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
          <Suspense fallback={<Loader className="size-10" />}>
            <Skills />
          </Suspense>
          <Contact />
        </div>
      </section>
      <div className="lg:hidden place-self-center">
        <h1 className="text-3xl font-bold">Experience</h1>
      </div>
      <Suspense
        fallback={
          <section className="grid place-items-center pt-15">
            <Loader className="size-12" />
          </section>
        }
      >
        <Experience />
      </Suspense>
    </main>
  );
}

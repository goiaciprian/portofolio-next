import { Environment } from "@portofolio/internal/cms";
import { Loader } from "@portofolio/ui/Loader";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { deleteProject } from "~/actions/projects.actions";
import { PreviewPage } from "~/components/pages/PreviewPage";
import { ProjectsPage } from "~/components/pages/ProjectsPage";
import { SkillsPage } from "~/components/pages/SkillsPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    tab: "preview" | "projects" | "skills" | undefined;
    env: Environment | undefined;
  }>;
}) {
  const { tab = "preview", env = Environment.PRODUCTION } = await searchParams;

  const render = () => {
    switch (tab) {
      case "preview":
        return <PreviewPage />;
      case "projects":
        return <ProjectsPage env={env} />;
      case "skills":
        return <SkillsPage env={env} />;
      default:
        notFound();
    }
  };

  return (
    <Suspense
      fallback={
        <div className="grid place-items-center h-full">
          <Loader />
        </div>
      }
    >
      <section className="px-10 flex flex-col gap-10">{render()}</section>
    </Suspense>
  );
}

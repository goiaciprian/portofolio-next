import { Environment, getSkills } from "@portofolio/internal/cms";
import { X } from "lucide-react";
import { revalidatePath } from "next/cache";
import { deleteSkillById } from "~/actions/skills.actions";
import { SkillsFroms } from "~/components/SkillsFroms";

export async function SkillsPage({ env }: { env: Environment }) {
  const skills = await getSkills(env);

  return (
    <>
      <div>
        <h2 className="font-bold text-4xl">Manage skills</h2>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="font-semibold text-3xl pb-4">Existing skills</h3>
          <div>
            <ul>
              {skills.map((skill) => (
                <li key={skill.id} className="text-2xl py-2">
                  <span className="inline-block pr-2">
                    <button
                      className="align-middle hover:text-business-moonstone cursor-pointer"
                      onClick={async () => {
                        "use server";
                        await deleteSkillById(skill.id);
                        revalidatePath("/app", "page");
                      }}
                    >
                      <X className="size-6" />
                    </button>
                  </span>
                  <span className="align-middle">
                    {skill.name} ({skill.type})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SkillsFroms />
      </div>
    </>
  );
}

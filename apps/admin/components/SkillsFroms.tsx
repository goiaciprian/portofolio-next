"use client";

import { useActionState } from "react";
import { createSkill } from "~/actions/skills.actions";

export function SkillsFroms({ disable=false }: { disable?: boolean }) {
  const [state, formAction, pending] = useActionState(createSkill, {
    name: "",
    type: "",
  });

  return (
    <div>
      <h3 className="font-semibold text-3xl pb-4">Add a new skill</h3>
      <form action={formAction}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-2xl font-semibold">
              Name
            </label>
            <div className="p-2 border rounded-xl focus-within:border-business-moonstone">
              <input
                id="name"
                name="name"
                className="max-w-min outline-none text-2xl disabled:opacity-50 "
                defaultValue={state.name}
                disabled={pending || disable}
              />
            </div>
            <div className="text-xl text-red-500">
              {(state.errors?.name ?? []).map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="type" className="text-2xl font-semibold">
              Type
            </label>
            <div className="p-2 border rounded-xl focus-within:border-business-moonstone">
              <select
                id="type"
                name="type"
                className="outline-none w-full text-2xl bg-business-black disabled:opacity-50"
                defaultValue={state.type}
                disabled={pending || disable}
              >
                <option disabled className="text-xl py-2" value="">
                  Select type
                </option>
                <option className="text-xl py-2" value="MAIN">
                  MAIN
                </option>
                <option className="text-xl py-2" value="OTHER">
                  OTHER
                </option>
              </select>
            </div>
            <div className="text-xl text-red-500">
              {(state.errors?.type ?? []).map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </div>
          </div>
          {/* this needs to be hidden so we have access to the environment in the server action */}
          <input
            className="hidden"
            name="environment"
            readOnly
            value="STAGING"
          />
        </div>
        <div className="grid place-items-center py-10">
          <div className="text-xl text-red-500 place-self-start">
            {(state.errors?.general ?? []).map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
          <button
            type="submit"
            className="text-2xl font-semibold not-disabled:cursor-pointer px-6 py-3  rounded not-disabled:hover:border border-business-moonstone not-disabled:hover:text-business-moonstone disabled:opacity-50 "
            disabled={pending || disable}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

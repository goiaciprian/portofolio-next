"use client";

import { useActionState } from "react";
import { createProject } from "~/actions/projects.actions";
import { UploadFile } from "./UploadFile";

export function ProjectForm({ disable = false }: { disable?: boolean }) {
  const [stateCreate, formActionCreate, pendingCreate] = useActionState(
    createProject,
    {
      description_left: undefined,
      description_right: undefined,
      image_left: undefined,
      image_right: undefined,
      image_url_left: undefined,
      image_url_right: undefined,
    },
  );

  return (
    <div className="ml-5">
      <h3 className="text-3xl font-semibold">Add a new project</h3>
      <h4 className="font-semibold pb-5 opacity-50">
        You can create both sides or only one
      </h4>
      <form action={formActionCreate}>
        <div className="flex flex-col gap-5 pb-10">
          <h4 className="py-3 font-semibold text-xl">Left Side</h4>
          <div className="flex flex-col">
            <label htmlFor="description_left" className="pb-3 text-xl">
              Description Left
            </label>
            <textarea
              id="description_left"
              name="description_left"
              className="outline-0 p-2 border border-white rounded-xl"
              disabled={disable || pendingCreate}
              defaultValue={stateCreate.description_left}
            />
            <div className="text-xl text-red-500">
              {(stateCreate.errors?.description_left ?? []).map(
                (err, index) => (
                  <p key={index}>{err}</p>
                ),
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image_left" className="pb-3 text-xl">
              Image Left
            </label>
            <UploadFile name="image_left" disable={disable || pendingCreate} />
            <div className="text-xl text-red-500">
              {(stateCreate.errors?.image_left ?? []).map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image_url_left">Image URL Left</label>
            <input
              type="text"
              className="outline-0 p-2 border border-white rounded-xl"
              id="image_url_left"
              name="image_url_left"
              disabled={disable || pendingCreate}
              defaultValue={stateCreate.image_url_left}
            />
            <div className="text-xl text-red-500">
              {(stateCreate.errors?.image_url_left ?? []).map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="py-3 font-semibold text-xl">Right Side</h4>
          <div className="flex flex-col">
            <label htmlFor="description_right" className="pb-3 text-xl">
              Description Right
            </label>
            <textarea
              id="description_right"
              name="description_right"
              className="outline-0 p-2 border border-white rounded-xl"
              disabled={disable || pendingCreate}
              defaultValue={stateCreate.description_right}
            />
            <div className="text-xl text-red-500">
              {(stateCreate.errors?.description_right ?? []).map(
                (err, index) => (
                  <p key={index}>{err}</p>
                ),
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image_right" className="pb-3 text-xl">
              Image Right
            </label>
            <UploadFile name="image_right" disable={disable || pendingCreate} />
            {/*<input
              id="image_right"
              name="image_right"
              type="file"
              accept="image/*"
              disabled={disable || pendingCreate}
              // defaultValue={stateCreate.image_right}
            />*/}
            <div className="text-xl text-red-500">
              {(stateCreate.errors?.image_right ?? []).map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image_url_right">Image URL Left</label>
            <input
              type="text"
              className="outline-0 p-2 border border-white rounded-xl"
              id="image_url_right"
              name="image_url_right"
              disabled={disable || pendingCreate}
              defaultValue={stateCreate.image_url_right}
            />
          </div>
          <div className="text-xl text-red-500">
            {(stateCreate.errors?.image_url_right ?? []).map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </div>
        </div>

        <input className="hidden" readOnly value="STAGING" name="environment" />
        <button
          type="submit"
          className="text-2xl font-semibold not-disabled:cursor-pointer px-6 py-3  rounded not-disabled:hover:border border-business-moonstone not-disabled:hover:text-business-moonstone disabled:opacity-50 mt-10"
          disabled={disable || pendingCreate}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

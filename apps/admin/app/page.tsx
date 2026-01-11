import { AuthButton } from "~/components/AuthButton";

export default async function Page() {
  return (
    <main>
      <div className="grid place-items-center h-screen">
        <div>
          <h1 className="text-white text-4xl font-bold">
            This is the CMS for my portfolio
          </h1>
          <div className="flex w-full justify-center mt-10">
            <AuthButton type="signIn" />
          </div>
        </div>
      </div>
    </main>
  );
}

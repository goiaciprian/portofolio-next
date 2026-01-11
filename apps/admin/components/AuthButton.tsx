import { handleSignIn, handleSignOut } from "~/actions/auth.actions";

export function AuthButton({ type }: { type: "signIn" | "signOut" }) {
  const variant: Record<typeof type, string> = {
    signIn:
      "text-white p-5 text-3xl font-bold bg-business-moonstone rounded-2xl cursor-pointer",
    signOut:
      "cursor-pointer text-2xl font-bold text-white hover:text-business-moonstone",
  };

  return (
    <form action={type === "signIn" ? handleSignIn : handleSignOut}>
      <button type="submit" className={`${variant[type]} `}>
        {type === "signIn" ? "Sign In" : "Sign Out"}
      </button>
    </form>
  );
}

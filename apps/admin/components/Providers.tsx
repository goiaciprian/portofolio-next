"use client";

import { User } from "next-auth";
import React from "react";
import { UserContext } from "~/context/UserContext";

export default function Providers({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) {
  return (
    <UserContext.Provider value={{ email: user.email, name: user.name }}>
      <>{children}</>
    </UserContext.Provider>
  );
}

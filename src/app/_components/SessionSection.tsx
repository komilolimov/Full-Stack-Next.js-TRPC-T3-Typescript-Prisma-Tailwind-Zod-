"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Todos } from "./Todos";
import { CreateTodo } from "./CreateTodo";

export function SessionSection() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="container flex flex-col items-center gap-2">
        {
          sessionData && (
            <>
              <h1 className="text-4xl text-white">All todos will appear here:</h1>
              <Todos />
              <CreateTodo/>
            </>
          )
        }
        
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl text-white">
          {sessionData && <span>Logged in as {sessionData.user?.email}</span>}
        </p>
        {sessionData ? (
          <button
            onClick={() => signOut({ callbackUrl: "/home" })}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

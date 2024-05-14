"use client";

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

function HeroForm({user}) {
  const router = useRouter();
  useEffect(() => {
    if (
      "localStorage" in window &&
      window.localStorage.getItem("desiredUsername")
    ) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      redirect("/account?desiredUsername=" + username);
    }
  }, []);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector("input");
    const username = input.value;
    if (username.length > 0) {
      if (user) {
        router.push("/account?desiredUsername=" + username);
      } else {
        window.localStorage.setItem("desiredUsername", username);
        await signIn("google");
      }
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row space-x-2 items-center gap-4"
      >
        <div className="flex">
          <span className="dark:text-white">linkchain.to/</span>
          <input
            className="max-w-lg flex-1 shadow-xl border-yellow-400 rounded-md border-2 outline-sky-500"
            placeholder="username"
            type="text"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-700 p-1 px-7 shadow-sm hover:shadow-xl text-white rounded-full hover:bg-slate-900 dark:hover:bg-slate-500"
        >
          create
        </button>
      </form>
    </div>
  );
}

export default HeroForm;

"use client";
import getUsername from "@/actions/getUsername";
import { redirect } from "next/navigation";
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";

export default function UsernameForm({ desiredUsername }) {
  const [taken, setTaken] = useState(false);
  async function handleSubmit(formData) {
    const result = await getUsername(formData);
    setTaken(result === false);
    if (result) {
      redirect('/account?created='+formData.get('username'));
    }
  }

  return (
    <div>
      <form action={handleSubmit}>
        <h1 className="dark:text-white text-4xl font-bold text-center mb-4 mt-40">
          Your <span className="text-yellow-400">Username</span>, Your Key{" "}
          <span className="text-yellow-400">Link</span>
        </h1>
        <h2 className="dark:text-slate-400 text-slate-600 text-2xl font-bold text-center mb-6">
          Choose your Username
        </h2>
        <div className="max-w-xs mx-auto">
          <input
            type="text"
            name="username"
            className="block p-2 mx-auto border-2 rounded-lg dark:border-yellow-400 border-purple-500 dark:bg-purple-200 bg-yellow-100 mb-4"
            placeholder="Your username"
            defaultValue={desiredUsername}
          />

          {taken && (
            <div className="text-center p-2 mb-4 bg-red-300 rounded-xl border-2 border-red-500 text-md">
              Username Already Taken
            </div>
          )}

          <SubmitButton>
            Claim your username
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import RadioTogglers from "../formItems/radioTogglers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";

export default async function PageSettingsForm({ page }) {
  const session = await getServerSession(authOptions);

  return (
    <div className="-m-4">
      <form>
        <div className="bg-gray-300 py-16 flex justify-center items-center">
          <RadioTogglers
            options={[
              { value: "color", label: "Color" },
              { value: "image", label: "Image" },
            ]}
          />
        </div>
        <div className="flex justify-center relative -top-8">
          <Image
            src={session?.user?.image}
            className="rounded-full border-white border-4 shadow-lg shadow-black/50"
            alt="avatar"
            width={128}
            height={128}
          />
        </div>
      </form>
    </div>
  );
}
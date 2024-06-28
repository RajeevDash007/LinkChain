import React from "react";
import RadioTogglers from "../formItems/radioTogglers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

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

        <div className="flex justify-center -mb-6">
          <Image
            src={session?.user?.image}
            className="rounded-full border-white border-4 relative -top-8 shadow-lg shadow-black/50"
            alt="avatar"
            width={128}
            height={128}
          />
        </div>
        <div className="p-4">
          <input
            type="text"
            id="nameIn"
            name="displayName"
            defaultValue={page.displayName}
            placeholder="Display Name"
          />

          <input
            type="text"
            id="locationIn"
            name="location"
            defaultValue={page.location}
            placeholder="Location"
          />

          <textarea
            id="bioIn"
            name="bio"
            defaultValue={page.bio}
            placeholder="Bio"
          />

          <SubmitButton>
            <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faSave}/>
            <span>Save</span>
            </div>
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

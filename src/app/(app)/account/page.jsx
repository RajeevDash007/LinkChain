import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import PageSettingsForm from "@/components/forms/PageSettingsForm";

async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  if (!session) {
    redirect("/");
  }
  mongoose.connect(process.env.MONGODB_URI);
  const page = await Page.findOne({ owner:session?.user?.email });

  if(page){
    return(
      <div>
        <PageSettingsForm page={page}/>
      </div>
    )
  }

  return (
    <div>
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
}

export default AccountPage;

import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

// Why is it lowercase in the parameter???????????
interface IParams {
  listingid?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const { listingid } = params;
  console.log(params);

  if (!listingid || typeof listingid !== "string") {
    throw new Error("Invalid ID");
  }

  const listing = await prisma.listing.delete({
    where: {
      id: listingid,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}

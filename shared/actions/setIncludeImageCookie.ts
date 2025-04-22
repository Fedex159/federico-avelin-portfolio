"use server";

import { cookies } from "next/headers";
import { INCLUDE_IMAGE_COOKIE_KEY } from "../utils/constants";

type Props = {
  includeImage: boolean;
};

export const setIncludeImageCookie = async ({ includeImage }: Props) => {
  const cookieStore = await cookies();

  cookieStore.set(INCLUDE_IMAGE_COOKIE_KEY, String(includeImage));
};

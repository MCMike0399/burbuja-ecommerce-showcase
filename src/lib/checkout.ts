import { cookies } from "next/headers";

export async function getIdFromCookies(channel: string) {
   const cookieName = `checkoutId-${channel}`;
   const checkoutId = (await cookies()).get(cookieName)?.value || "";
   return checkoutId;
}

export async function find(checkoutId: string) {
   const response = await fetch(`/api/checkout/${checkoutId}`);
   return response.json();
}
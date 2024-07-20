import { NextResponse } from "next/server";

export async function middleware() {
  // If you don't actually need to fetch redirects, you can remove this entire function
  // and just export an empty middleware:
  // export const middleware = () => {}
  // If you do need to fetch redirects, keep the following code:
  // try {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_BACKEND_URL}wp-json/rest/v1/redirects`
  //   );
  //   if (!response.ok) {
  //     console.log(`Redirects endpoint not available: ${response.status}`);
  //     return NextResponse.next();
  //   }
  //   const redirections = await response.json();
  //   if (redirections && typeof redirections === "object") {
  //     const redirectLinks = Object.keys(redirections);
  //     console.log("Redirect links:", redirectLinks);
  //     // Add your redirection logic here
  //   } else {
  //     console.log("No valid redirections found");
  //   }
  // } catch (error) {
  //   console.error("Error in middleware:", error);
  // }
  // return NextResponse.next();
}

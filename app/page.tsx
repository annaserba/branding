import { Suspense } from "react";
import Nav from "./nav";

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  return (
    <>
      <Suspense>
            <Nav />
      </Suspense>
    </>
  );
}

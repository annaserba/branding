import { Suspense } from "react";
import Nav from "./nav";

export default async function IndexPage({}: {}) {

  return (
    <>
      <Suspense>
            <Nav />
      </Suspense>
    </>
  );
}

import { Suspense } from "react";
import Nav from "./conponents/navbar";

export default async function IndexPage({}: {}) {

  return (
    <>
      <Suspense>
          <Nav />
      </Suspense>
    </>
  );
}

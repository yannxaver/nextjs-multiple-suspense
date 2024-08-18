import { Await } from "@/components/await";
import { Button } from "@/components/button";
import { getLondonTime, getNewYorkTime } from "@/queries";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<div>Fallback a...</div>}>
        <Await promise={getNewYorkTime()}>
          {(data) => <div>a: {data}</div>}
        </Await>
      </Suspense>

      <Suspense fallback={<div>Fallback b...</div>}>
        <Await promise={getLondonTime()}>
          {(data) => <div>b: {data}</div>}
        </Await>
      </Suspense>

      <Button />
    </div>
  );
}

import { getData, getUser } from "@/actions/actions";
import { Await } from "@/components/await";
import { Button } from "@/components/button";
import { Suspense } from "react";

export default async function Home() {
  const user = await getUser();

  return (
    <div>
      <Suspense fallback={<div>Fallback a...</div>}>
        <Await promise={getData(user)}>{(data) => <div>a: {data}</div>}</Await>
      </Suspense>

      <Suspense fallback={<div>Fallback b...</div>}>
        <Await promise={getData(user)}>{(data) => <div>b: {data}</div>}</Await>
      </Suspense>

      <Button />
    </div>
  );
}

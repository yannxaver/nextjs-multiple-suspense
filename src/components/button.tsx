"use client";

import { useRouter } from "next/navigation";

export function Button() {
  const router = useRouter();

  return <button onClick={() => router.refresh()}>Refresh</button>;
}

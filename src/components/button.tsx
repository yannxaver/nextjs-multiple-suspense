"use client";

import { refreshAction } from "@/actions/actions";

export function Button() {
  return (
    <form>
      <button formAction={refreshAction}>Refresh</button>
    </form>
  );
}

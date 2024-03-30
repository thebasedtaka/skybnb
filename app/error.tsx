"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh-oh!" subtitle="You broke it :C" />;
}

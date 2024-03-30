"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import Heading from "./Heading";
interface EmptyState {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = "No matches found",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            //remember that filters are a part of
            //the url and setting it back to / will reset it
            //easy fix
            onClick={() => {
              router.push("/");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;

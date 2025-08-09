import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Announcement = () => {
  return (
    <Link
      href="#link"
      className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
    >
      <span className="text-foreground text-sm">
        {/* Introducing Support for AI Models */}
        Introducing <span className="font-semibold">Ike v0.1</span>
      </span>
      <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

      <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
          <span className="flex size-6">
            <ArrowRight className="m-auto size-3" />
          </span>
          <span className="flex size-6">
            <ArrowRight className="m-auto size-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

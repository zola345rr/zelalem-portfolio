import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-[#a8adb6]">
        That page does not exist. Try the home page or the projects collection instead.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/" className="rounded-md bg-[#3b82f6] px-4 py-2.5 font-medium text-white">
          Return home
        </Link>
        <Link href="/projects" className="rounded-md border border-[#2a2e35] px-4 py-2.5 font-medium">
          View projects
        </Link>
      </div>
    </div>
  );
}

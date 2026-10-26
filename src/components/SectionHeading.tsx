export default function SectionHeading({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      {children ? <p className="mt-2 max-w-2xl text-[#a8adb6]">{children}</p> : null}
    </div>
  );
}

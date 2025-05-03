import InitialLoader from "@/components/initial-loader";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <InitialLoader>{children}</InitialLoader>;
}

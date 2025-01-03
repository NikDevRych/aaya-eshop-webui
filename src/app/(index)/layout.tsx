import IndexHeader from "components/index-header/index-header";

export default function IndexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <IndexHeader />
      {children}
    </>
  );
}

export default function myLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="border-b p-2">20% off for the next 3 days</div>
      <div>{children}</div>
    </>
  );
}

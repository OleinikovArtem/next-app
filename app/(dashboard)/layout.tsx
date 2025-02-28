export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <h1 className="text-3xl">Dashboard navbar</h1>
      {children}
    </>
  );
}

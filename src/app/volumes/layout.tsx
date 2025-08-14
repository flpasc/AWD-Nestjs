export default function VolumesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10% 1fr",
        height: "100%",
      }}
    >
      <aside style={{ backgroundColor: "blue", color: "white" }}>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}

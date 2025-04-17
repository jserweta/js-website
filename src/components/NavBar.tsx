export default function NavBar() {
  return (
    <header className="before:bg-card fixed top-0 z-10 h-full w-(--nav-max-width) before:absolute before:top-0 before:right-0 before:h-screen before:w-[calc(100vw-var(--site-max-width)/2)] before:content-['']">
      <div className="bg-card flex h-full justify-center">
        <div className="relative flex flex-col justify-center gap-5 p-5">
          <h1>Navbar</h1>
        </div>
      </div>
    </header>
  );
}

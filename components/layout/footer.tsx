import Link from "next/link";

export function Footer() {
  return (
    <footer className="">
      <div className="flex flex-col items-center justify-between gap-4 text-center text-muted-foreground py-8 border-t bg-background/50 max-w-4xl mx-auto md:flex-row text-xs">
        <p>© {new Date().getFullYear()} Ike AI. All rights reserved.</p>
        <nav aria-label="footer navigation" className="flex items-center gap-2">
          <Link href="/about" className="">
            About
          </Link>
          <span className="w-px h-5 bg-muted-foreground" />
          <Link href="/legal/terms" className="">
            Terms & Conditions
          </Link>
          <span className="w-px h-5 bg-muted-foreground" />
          <Link href="/legal/privacy" className="">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

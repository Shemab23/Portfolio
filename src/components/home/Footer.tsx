export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-foreground/5 bg-secondary/30 py-6 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        {/* Clean, formatted copyright notice */}
        <p className="text-xs font-light text-foreground/40">
          Copyright &copy; {currentYear} Bruno Shema. All rights reserved.
        </p>

        {/* Quick-access professional directory links */}
        <div className="flex items-center gap-6 text-xs font-medium text-foreground/40">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-copper"
          >
            GitHub
          </a>
          <a
            href="#" // Add your real LinkedIn link here
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-copper"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com" // Add your real email here
            className="transition-colors hover:text-copper"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

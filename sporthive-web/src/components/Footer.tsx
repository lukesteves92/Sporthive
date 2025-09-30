export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm opacity-70">
        SportHive © {new Date().getFullYear()}
      </div>
    </footer>
  )
}
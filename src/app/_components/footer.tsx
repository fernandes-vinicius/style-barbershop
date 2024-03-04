const fullYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="w-full bg-secondary px-5 py-6">
      <p className="text-xs text-[#838896]">
        © {fullYear} Copyright <strong>Style Barber</strong>
      </p>
    </footer>
  )
}

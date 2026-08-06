export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <span>© {year} Arneil Paul Polican</span>
      <span>Cebu, Philippines</span>
    </footer>
  )
}

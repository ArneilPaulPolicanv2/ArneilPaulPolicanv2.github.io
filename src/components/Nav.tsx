export function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <a className="nav__mark" href="#top">
        APP
      </a>
      <ul className="nav__links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a className="nav__cta" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

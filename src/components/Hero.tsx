import { Nav } from './Nav'

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}hero-cebu.jpg`}
          alt=""
          width={2400}
          height={1800}
          fetchPriority="high"
        />
        <div className="hero__veil" />
      </div>

      <Nav />

      <div className="hero__content">
        <h1 className="hero__brand">Arneil Paul Polican</h1>
        <p className="hero__headline">Software engineer building on Polkadot.</p>
        <p className="hero__lede">
          From Cebu — chain infrastructure, Substrate contracts, and open-source
          tooling for the networks people actually use.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            View selected work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}

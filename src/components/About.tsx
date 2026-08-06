import { useReveal } from '../hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section about reveal" id="about" ref={ref}>
      <p className="section__label">About</p>
      <h2 className="section__title">Engineering for open networks.</h2>
      <p className="section__text">
        I am a software engineer based in Cebu, Philippines, focused on Polkadot
        ecosystem infrastructure — from ink! smart contracts and parachain metadata
        to the endpoints and configs that keep wallets and apps connected. I have
        contributed upstream to polkadot-js/apps and work closely with teams
        shipping on Substrate.
      </p>

      <div className="about__grid">
        <article className="about__item">
          <h3>Protocol layer</h3>
          <p>
            Substrate contracts, staking logic, and chain-facing tooling that has
            to stay correct under real network conditions.
          </p>
        </article>
        <article className="about__item">
          <h3>Ecosystem data</h3>
          <p>
            Relay and parachain metadata, RPC endpoints, and asset lists used by
            client applications across Polkadot and Kusama.
          </p>
        </article>
        <article className="about__item">
          <h3>From Cebu</h3>
          <p>
            Building with Philippine Web3 teams — including work around Xode
            Blockchain — and sharing that story at community events.
          </p>
        </article>
      </div>
    </section>
  )
}

import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section contact reveal" id="contact" ref={ref}>
      <p className="section__label">Contact</p>
      <h2 className="section__title">Let’s build the next link.</h2>
      <p className="section__text">
        Open to collaborations on Substrate, Polkadot infrastructure, and
        security-minded product work. Reach out by email or find me on GitHub and
        LinkedIn.
      </p>
      <div className="contact__links">
        <a className="btn btn--solid" href="mailto:policanarneilpaul@gmail.com">
          Email Arneil
        </a>
        <a
          className="btn btn--outline"
          href="https://github.com/ArneilPaulPolicanv2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn btn--outline"
          href="https://www.linkedin.com/in/arneilpaulpolican"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

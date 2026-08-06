import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'

export function Work() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section reveal" id="work" ref={ref}>
      <p className="section__label">Selected work</p>
      <h2 className="section__title">Projects that keep chains usable.</h2>
      <p className="section__text">
        A short list of contracts, metadata repos, and open-source contributions
        across the Polkadot stack.
      </p>

      <div className="work-list">
        {projects.map((project) => (
          <a
            key={project.title}
            className="work-item"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <p className="work-item__kind">{project.kind}</p>
            <div className="work-item__body">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="work-item__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <span className="work-item__arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

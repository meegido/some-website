import styles from './project-details.module.css';
import { ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import GithubLogo from '../../../assets/images/github-logo.png';

const ProjectDetails = ({ project, className = '' }) => {
  const {
    title,
    description,
    challengeLink,
    challengeSiteName,
    learnings,
    skills,
    requirements,
    repositoryLink,
  } = project;

  const backgroundClassName = `${className}`;

  return (
    <section className={`${styles.project__content} ${backgroundClassName}`}>
      <h2>{title}</h2>
      <Accordion.Root type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className={styles.about} value="item-1">
          <Accordion.Header className={styles.description}>
            <p>
              {description}{' '}
              <a href={challengeLink} target="_blank" rel="noopener noreferrer">
                {challengeSiteName}
              </a>
            </p>
            <Accordion.Trigger className={styles.close__wrapper}>
              <ChevronDown size={32} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div className={styles.content__wrapper}>
              <section className={styles.requirements__wrapper}>
                <h3>Requirements</h3>
                <ul>
                  {requirements.map((item) => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </section>
              <section className={styles.learnings__wrapper}>
                <article className={styles.learnings}>
                  <h2>Learnings</h2>
                  <div className={styles.learning__tags}>
                    {learnings.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </article>
                <article className={styles.learnings}>
                  <section className={styles.skills}>
                    <a
                      className={styles.github}
                      href={repositoryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={GithubLogo} alt="Github project link" />
                    </a>
                    <h2>Skills Used</h2>
                  </section>
                  <section className={styles.learning__tags}>
                    {skills.map((skill) => (
                      <p key={skill}>{skill}</p>
                    ))}
                  </section>
                </article>
              </section>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
};

export default ProjectDetails;

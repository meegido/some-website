import styles from './project-details.module.css';
import { ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const ProjectDetails = () => {
  return (
    <section className={styles.project__content}>
      <h2>E-commerce product page</h2>
      <Accordion.Root type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className={styles.about} value="item-1">
          <Accordion.Header className={styles.description}>
            <p>
              A learning exercise about building a e-commerce product page fully functional and get
              it looking as close to the design possible, from{' '}
              <a
                href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Mentor
              </a>
              .
            </p>
            <Accordion.Trigger className={styles.close__wrapper}>
              <ChevronDown size={48} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div className={styles.content__wrapper}>
              <section className={styles.requirements__wrapper}>
                <h3>Requirements</h3>
                <ul>
                  <li>
                    <p>Open a lightbox gallery by clicking on the large product image</p>
                  </li>
                  <li>
                    <p>Switch the large product image by clicking on the small thumbnail images</p>
                  </li>
                  <li>
                    <p>Add items to the cart</p>
                  </li>
                  <li>
                    <p>View the cart and remove items from it</p>
                  </li>
                  <li>
                    <p>
                      View the optimal layout for the site depending on their device's screen size
                    </p>
                  </li>
                  <li>
                    <p>See hover states for all interactive elements on the page</p>
                  </li>
                  <li>
                    <p>
                      Change cart icon to trash icon when the cart items quantity is one (added by
                      me).
                    </p>
                  </li>
                </ul>
              </section>
              <section className={styles.learnings__wrapper}>
                <div className={styles.learnings}>
                  <h2>Skills Used</h2>
                  <article className={styles.learning__tags}>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JS</p>
                    <p>React</p>
                  </article>
                </div>
                <article className={styles.learnings}>
                  <h2>Learnings</h2>
                  <div className={styles.learning__tags}>
                    <p>React Lifecycle</p>
                    <p>State management</p>
                    <p>Conditional rendering</p>
                    <p>Custom hooks</p>
                  </div>
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

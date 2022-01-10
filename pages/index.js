import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hamsa Elmi | Home</title>
        <meta name='description' content="Hamsa Elmi's Portfolio Website" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Projects</h1>
        <section className={styles.portfolioProjects}>
          {/* project */}
          <article className={styles.project}>
            <a
              href='https://gameland.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                width={600}
                height={350}
                src='/images/gamerland.png'
                alt='A screenshot of a website for gamers'
              />
            </a>

            <h3>
              <a
                href='https://gameland.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                Gamerland
              </a>
            </h3>
            <p>
              A website for gamers built with Next.js and Styled Components. I
              also made static pages using the data I fetched using
              getStaticProps and getStaticPaths and search filter where users
              can search for a particular game.
            </p>
            <span>
              <a
                href='https://github.com/hamsame/gameland'
                className={styles.projectLink}
                target='_blank'
                rel='noreferrer'
              >
                Github Repository
              </a>
              <a
                href='https://gameland.vercel.app/'
                className={styles.projectLink}
                target='_blank'
                rel='noreferrer'
              >
                Live Website
              </a>
            </span>
          </article>

          {/* project */}
          <article className={styles.project}>
            <a
              href='https://gonomad.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                width={600}
                height={350}
                src='/images/gonomad.png'
                alt='A screenshot of a website for aspiring digital nomads'
              />
            </a>
            <h3>
              <a
                href='https://gonomad.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                GoNomad
              </a>
            </h3>

            <p>
              A website for aspiring digital nomads built using
              create-react-app. I used plain css for the styling and used
              react-router-dom to make dynamic routes for the blog posts.
            </p>
            <span>
              <a
                href='https://github.com/hamsame/gonomad'
                className={styles.projectLink}
                target='_blank'
                rel='noreferrer'
              >
                Github Repository
              </a>
              <a
                href='https://gonomad.netlify.app/'
                className={styles.projectLink}
                target='_blank'
                rel='noreferrer'
              >
                Live Website
              </a>
            </span>
          </article>

          {/* project */}
          <article className={styles.project}>
            <a
              href='https://react-js-restaurant.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                width={600}
                height={350}
                src='/images/restaurant-website.png'
                alt='A screenshot of a website developed for a fictitious restaurant'
              />
            </a>

            <h3>
              <a
                href='https://react-js-restaurant.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Restaurant Website
              </a>
            </h3>
            <p>
              A restaurant website I have built using create-react-app. I
              implemented Google Maps Api, react router and JSX styling
            </p>
            <span>
              <a
                href='https://github.com/hamsame/restaurant-website'
                className={styles.projectLink}
                target='_blank'
                rel='noreferrer'
              >
                Github Repository
              </a>
              <a
                href='https://react-js-restaurant.netlify.app/'
                className={styles.projectLink}
                target='_blank'
                rel='noreferrer'
              >
                Live Website
              </a>
            </span>
          </article>

          {/* project */}
          <article className={styles.project}>
            <a
              href='https://hamsame.github.io/logo/'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                width={600}
                height={350}
                src='/images/adventure-shop.png'
                alt='A screenshot of a website developed for a fictitious local adventure shop'
              />
            </a>
            <h3>
              <a
                href='https://hamsame.github.io/logo/'
                target='_blank'
                rel='noreferrer'
              >
                Adventure Shop Website
              </a>
            </h3>
            <p>
              A website I have built for a fake local adventure shop utilising
              HTML, SASS, a little JavaScript and Line Awesome icons.
            </p>
            <span>
              <a
                href='https://github.com/hamsame/logo'
                className={styles.projectLink}
                target='_blank'
                rel='noreferrer'
              >
                Github Repository
              </a>
              <a
                href='https://react-js-restaurant.netlify.app/'
                className={styles.projectLink}
                target='_blank'
                rel='noreferrer'
              >
                Live Website
              </a>
            </span>
          </article>
        </section>
      </main>
    </div>
  )
}

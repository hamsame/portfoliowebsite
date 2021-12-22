import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hamsa Elmi | About</title>
        <meta name='description' content='Hamsa Elmi about me page' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css'
          integrity='sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>

      <Navbar />

      <main className={styles.about}>
        <h1>About Me</h1>
        <section>
          <p>Hi I am Hamsa Elmi, a software engineer based in London.</p>
          <p>
            I have experience with frontend tools such as HTML, CSS, JavaScript,
            React, Next JS. I also have experience provisioning Azure cloud
            services such as Azure App Service and achieved the&nbsp;
            <a
              href='https://www.credly.com/badges/b5d9459a-4bfd-4cb2-93f7-fe3b814c2e5a/public_url'
              target='_blank'
              rel='noreferrer'
            >
              AZ-900
            </a>
            &nbsp;and&nbsp;
            <a
              href='https://www.credly.com/badges/078c620f-91dc-46f4-b9f0-e272dccddcc5/public_url'
              target='_blank'
              rel='noreferrer'
            >
              AZ-204
            </a>
            &nbsp;certifications. I have always wanted to make websites and
            mobile applications. I began to learn web development during the
            pandemic.
          </p>
          <p>
            I really enjoy making websites, particularly when applying concepts
            and knowledge I recently learned. I find it extremely gratifying to
            build some random idea I was just thinking about. I am currently
            looking for an opportunity to increase my skills and grow as a
            developer by being challenged and by having my skills and qualities
            being put to good use.
          </p>
        </section>
      </main>
    </div>
  )
}

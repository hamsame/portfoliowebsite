import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hamsa Elmi | Contact Me</title>
        <meta name='description' content='Hamsa Elmi contact me page' />
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

      <main className={styles.contact}>
        <h1>Contact Me</h1>
        <section>
          <article className={styles.details}>
            <h2>My Contact Details</h2>
            <ul>
              <li>
                <i className='lar la-envelope la-2x'></i> HamsaAelmi@gmail.com
              </li>
              <li>
                <i className='las la-mobile la-2x'></i> 078 6959 5997
              </li>
              <li>
                <i className='lab la-linkedin-in la-2x'></i>&nbsp;
                <a
                  href='https://www.linkedin.com/in/hamsa-elmi-19aab41a2/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Linkedin
                </a>
              </li>
              <li>
                <i className='lab la-github la-2x'></i>
                <a
                  href='https://github.com/hamsame'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </article>
          <article>
            <h2>Or Fill in this Form</h2>
            <form className={styles.form}>
              <div className={styles.formControl}>
                <label htmlFor='name'>Name : </label>
                <input type='text' id='name' name='name' />
              </div>
              <div className={styles.formControl}>
                <label htmlFor='email'>Email : </label>
                <input type='text' id='email' name='email' />
              </div>
              <div className={styles.formControl}>
                <label htmlFor='message'>Message : </label>
                <textarea name='message' id='message'></textarea>
              </div>
              <button type='submit' className={styles.submitBtn}>
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from 'contentful'
import React, { useState, useEffect } from 'react'

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CMS_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CMS_KEY,
  })

  const res = await client.getEntries({ content_type: 'portfolioProjects' })
  const data = await res
  return {
    props: { projects: data },
  }
}

export default function Home({ projects }) {
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
          {projects.items.map((item, index) => {
            return (
              <article key={index} className={styles.project}>
                <a
                  href={item.fields.hostedWebsite}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Image
                    src={
                      'https:' + item.fields.projectThumbnail.fields.file.url
                    }
                    width={
                      item.fields.projectThumbnail.fields.file.details.image
                        .width
                    }
                    height={
                      item.fields.projectThumbnail.fields.file.details.image
                        .height
                    }
                    alt={item.fields.projectThumbnail.fields.description}
                  />
                </a>
                <a
                  href={item.fields.hostedWebsite}
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3>{item.fields.projectTitle}</h3>
                </a>
                <p>{item.fields.briefDescription}</p>
                <span>
                  <a
                    href={item.fields.githubRepo}
                    target='_blank'
                    rel='noreferrer'
                    className={styles.projectLink}
                  >
                    Github Repository
                  </a>
                  <a
                    href={item.fields.hostedWebsite}
                    target='_blank'
                    rel='noreferrer'
                    className={styles.projectLink}
                  >
                    Live Website
                  </a>
                </span>
              </article>
            )
          })}
        </section>
      </main>
    </div>
  )
}

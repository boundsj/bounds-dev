import Head from 'next/head'

export const siteTitle = "bounds.dev"

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          {siteTitle}
        </title>
        <meta
          name="description"
          content="Personal website of Jesse Bounds"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <body className="bg-white dark:bg-gray-800">
        <main>{children}</main>
      </body>
    </div>
  )
}
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Layouts Example</title>
      <meta property='og:video' content='https://www.youtube.com/v/BQBjVr1iHH4' />

        <meta property="og:url" content="https://nextjs-test-bice-one.vercel.app/og-video-page-without-redirect"/>
        <meta property="og:image" content="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/868926a8-a3e4-4524-90ff-d0e4b1f1ed86/1200x630"/>
        <meta property="og:title" content="My title"/>
        <meta property="og:description" content="My description"/>
        <meta property="og:type" content="video" />

      <body>{children}</body>
    </html>
  )
}

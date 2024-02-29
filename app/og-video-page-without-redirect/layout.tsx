import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Layouts Example</title>
      <meta
          property="og:video"
          content="http://s3.mds.yandex.net/trailers/test.mp4"
        />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1920" />
        <meta property="og:video:height" content="1080" />

      <body>{children}</body>
    </html>
  )
}

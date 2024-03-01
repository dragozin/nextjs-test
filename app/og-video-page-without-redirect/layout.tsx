import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Video page without redirect</title>
      <meta property="fb:app_id" content="121953784483000" data-tid="57f72b5"/>
      <meta property="og:title" content="My title" />
      <meta property="og:description"
          content="My description" />
      <meta property="og:url" content="https://kinopoisk.ru/film/326/"/>
      <meta property="og:image"
          content="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/868926a8-a3e4-4524-90ff-d0e4b1f1ed86/1200x630" />
      <meta property="og:video"
          content="https://s3.mds.yandex.net/trailers/video_original/0ba6ad7048ddcd9ca67ba5c362a86fc8.mp4" />
      <meta property="og:video:secure_url"
          content="https://s3.mds.yandex.net/trailers/video_original/0ba6ad7048ddcd9ca67ba5c362a86fc8.mp4" />
      <meta property="og:video:type" content="video/mp4" />

      <body>{children}</body>
    </html>
  )
}

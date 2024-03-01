import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Layouts Example</title>
      <meta property="fb:app_id" content="121953784483000" data-tid="57f72b5"/>
      <meta property="og:title" content="Watch Lupin | Netflix Official Site" />
    <meta property="og:description"
        content="Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family." />
    <meta property="og:url" content="https://www.netflix.com/il-en/title/80994082" id="meta-url" />
    <meta property="og:image"
        content="https://occ-0-1853-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeanC00dirwbOI_qCf6NNgCCWsEJMO_opu469SFL2YHydczzuEZi16DBi10uzPnaqrrMZy6msFfqHk_6w0a5FAN7SA5XXPY2Ww5b.jpg?r=796" />
    <meta property="og:video"
        content="https://occ-0-1853-2773.1.nflxso.net/so/soa2/817/05f6317116f033d02737cd79408a9a2c.mp4?v=1" />
    <meta property="og:video:secure_url"
        content="https://occ-0-1853-2773.1.nflxso.net/so/soa2/817/05f6317116f033d02737cd79408a9a2c.mp4?v=1" />
    <meta property="og:video:type" content="video/mp4" />

      <body>{children}</body>
    </html>
  )
}

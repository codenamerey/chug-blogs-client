import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Chug Blogs</title>
      </Head>
      <body className='flex flex-col h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>L'oreál MetaHire</title>
      </Head>
      <main className='mx-auto flex h-screen min-h-full w-full max-w-7xl flex-grow flex-col justify-center px-4'>
        <span className='sr-only'>L'oreál MetaHire</span>
        <img className='h-14 w-auto' src='/images/loreal-logo.svg' alt='' />
      </main>
    </>
  );
}

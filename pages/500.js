import Head from 'next/head';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - L'oreál MetaHire</title>
      </Head>
      <main className='mx-auto flex h-screen min-h-full w-full max-w-7xl flex-grow flex-col items-center justify-center justify-center px-4 sm:px-6 lg:px-8'>
        <h1>500 - Error Interno de Servidor</h1>
      </main>
    </>
  );
}

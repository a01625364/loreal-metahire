// Package Imports
import Head from 'next/head';

// Component Imports
import Favicons from '../components/Favicons';

// Config Imports

// Custom Hook Imports

// Helper Imports

// Icon Imports

// Exported Component
export const Home = () => {
  return (
    <>
      <Head>
        <title>L'oreál MetaHire</title>
        <Favicons />
        <meta
          name='description'
          content='Nos especializamos en diseñar, construir, enviar y escalar productos digitales con eficiencia para el mercado posventa automotriz en Latino America.'
        />
      </Head>
      <main className='mx-auto flex h-screen min-h-full w-full max-w-3xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 items-center justify-center gap-8'>
          <div className='flex justify-center items-center w-full'>
            <img className='h-20 w-auto' src='/images/loreal-logo.svg' alt='' />
          </div>
          <div>
            <div className='grid gap-3'>
              {areas.map((area) => (
                <a
                  className='block w-full border border-gray-600 p-2 rounded-lg bg-white hover:bg-gray-50 flex items-center justify-between'
                  href={area.href}
                  key={area.name}
                >
                  <div className='flex items-center '>
                    <img
                      className='h-7 w-auto mr-2'
                      src={'/images/flags/' + area.image}
                      alt=''
                    />
                    <span className='text-sm font-medium text-gray-600'>
                      {area.name}
                    </span>
                  </div>
                  <span className='text-sm font-medium text-gray-600'>
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const areas = [
  {
    name: 'Governance & Management',
    href: '#',
    image: '-',
  },
  { name: 'Architecture & Integration', href: '#', image: '-' },
  { name: 'Business Applications', href: '#', image: '-' },
  { name: 'Cybersecurity', href: '#', image: '-' },
  { name: 'Infrastructure', href: '#', image: '-' },
];

export default Home;

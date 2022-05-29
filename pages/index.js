import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anna B - Développeuse Js Junior </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/myfavicon.png' />
      </Head>
      <Main />
      <About />
      <Skills />
    </div>
  );
}

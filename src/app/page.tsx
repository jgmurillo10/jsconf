import Image from 'next/image'
import Link from 'next/link'

const demos = [
  {
    name: 'Basic',
    description: `Basic example of integrating GPT into a React App, let's try to chat and maybe ask stuff about legal things, the weather, cool places`,
    image: '/medellin.png',
    path: '/basic'
  },
  {
    name: 'Function',
    description: 'This examples now integrates function calling which add steroids on GPT models, now were are able to use our own logic or third-party providers.',
    image: '/medellin3.png',
    path: '/function'
  },
  {
    name: 'Assistant',
    description: 'Now we have super powers! We can define assistants in natural language, and integrate them through the API into our apps!',
    image: '/medellin4.png',
    path: '/assistant'
  },
  {
    name: 'Bonus',
    description: `Bonus example using whisper, GPT, and text-to-speech models together with function calling. Everything in a few lines of code.`,
    image: '/medellin5.png',
    path: '/bonus'
  },
]
export default function Home() {
  return (
    <main className="">
      <section>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{backgroundImage: `url('/medellin2.png')`, height: 900}}>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{backgroundColor: `rgba(0, 0, 0, 0.6)` }}>
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">Hello <s>world</s> JSConf!</h2>
              <h4 className="mb-6 text-xl font-semibold">Welcome to Supercharge your React apps with GPT demos!</h4>
              <Link
                href="/#demos"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                >
                See demos
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section id="demos" className='flex flex-wrap justify-center gap-8 p-8'>
        {demos.map((demo) => (
          <div key={demo.name} className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image className="rounded-t-lg" src={demo.image} alt="" height={200} width={600} />
            </a>
            <div className="p-5">
              <Link href={demo.path} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <h5>{demo.name}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-200 mb-8">{demo.description}</p>
              <Link href={demo.path} className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                Try it now!
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

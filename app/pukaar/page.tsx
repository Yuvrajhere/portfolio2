
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">
      <main className="text-brand-black h-screen flex flex-col relative">
        <nav className="flex justify-between py-4 px-[6%] border-b relative z-10">
          {/* at the very top show some quotes by great people */}
          {/* about career and hardwork */}
          {/* about mental health and healing */}

          {/* navbar */}
          <div>
            Yuvraj
          </div>
          <div className="flex gap-4">
            <p>About</p>
            <p>Journey</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </nav>

        <p className="relative z-10  py-2 text-sm text-center border-b ">“Success is walking from failure to failure with no loss of enthusiasm.” — Winston Churchill</p>
        {/* hero */}

        <div className="relative z-10 grow flex flex-col justify-center items-center mb-20 ">
          <h1 className="text-6xl font-bold text-center w-1/2 bg-white/10 backdrop-filter backdrop-blur-sm">Hello, My Name is <br /><span className="text-brand-green">Yuvraj Singh Chouhan</span><br /> and I type <span className="underline decoration-brand-green">crazy stuff</span> on keyboards.</h1>
          <p className="font-medium text-xl mt-6">Most times <span className="text-brand-green">its fun</span>. Sometimes <span className="underline decoration-brand-green">it solve problems.</span></p>
        </div>
        <img src="/images/variant=033.png" alt="hi" className="w-80 h-auto absolute z-0 top-[25%] left-0 rotate-45" />
        <img src="/images/variant=033.png" alt="hi" className="w-96 h-auto absolute z-0 top-[50%] right-0 -rotate-45" />
        {/* <img src="/images/Jungle_Plant_4.png" alt="hi" className="rotate-45 w-[600px] h-auto absolute z-0 -left-40 -bottom-40 " /> */}
      </main>

      <div className="px-[8%] flex gap-20 items-center">
        {/* about me and skills */}
        {/* about me and interests */}

        {/* coding, web dev, entruepreunership */}
        {/* reading, writing, gym, meditation */}

        {/* <div className="flex">
          <img src="/images/me_1.jpg" className="h-80 w-80" />
          <div>
            <img src="/images/me_2.jpg" className="h-40 w-40" />
            <img src="/images/me_3.jpg" className="h-40 w-40" />
          </div>
        </div> */}

        <img src="/images/me_1.jpg" className="h-96 w-96 border-8 border-brand-green -rotate-6" />
        <div>
          <p className="text-3xl font-medium">I am a <span className=" text-brand-green">Frontend Developer</span> from Bengaluru, India. When I am not developing websites, I design them. I join companies and somehow people start appreaciating their websites. I am still curious and Learning JavaScript.</p>
          <div className="flex gap-4 mt-10">
            <p className="font-medium bg-brand-green text-brand-white px-4 py-2 rotate-3">React JS</p>
            <p className="font-medium bg-brand-green text-brand-white px-4 py-2">Next JS</p>
            <p className="font-medium bg-brand-green text-brand-white px-4 py-2 rotate-6">Vue JS</p>
            <p className="font-medium bg-brand-green text-brand-white px-4 py-2 rotate-45">Nuxt JS</p>
            <p className="font-medium bg-brand-green text-brand-white px-4 py-2 rotate-90">THREE JS</p>
          </div>
        </div>
      </div>
      <div>
        {/* career journey (add education) */}
        {/* life journey (add life events like moving cities) */}
      </div>
      <div>
        {/* projects */}
        {/* works like blogs, songs, poems */}

        {/* let this be filterable, paginated and text labeled */}

        {/* labels can be tech used, fields, level of complexity */}
        {/* labels can be songs, blogs or poems */}
      </div>
      <div>
        {/* contact note */}
        {/* Hire me in your team with resume and link to email */}
        {/* connect with me on linkedin */}

        {/* contact note */}
        {/* lets chill somewhere */}
        {/* connect with me on twitter (still thinking) */}
      </div>
      <div>
        {/* basic footer */}
      </div>

      <div className="px-[10%] py-40 flex gap-4 mt-[100vh]">
        {/* placeholder for now */}
        <div className="h-40 w-40 border border-black bg-primary"></div>
        <div className="h-40 w-40 border border-black bg-secondary"></div>
        <div className="h-40 w-40 border border-black bg-tertiary"></div>
        <div className="h-40 w-40 border border-black bg-quaternary"></div>
        <div className="h-40 w-40 border border-black bg-quinary"></div>
      </div>
    </div>
  );
}

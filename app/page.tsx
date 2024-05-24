
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <main className="bg-brand-black text-brand-white h-screen flex flex-col relative">
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
          <h1 className="text-6xl font-bold text-center w-1/2">Hello, My Name is <br /><span className="text-brand-green">Yuvraj Singh Chouhan</span><br /> and I type <span className="underline decoration-brand-green">crazy stuff</span> on keyboards.</h1>
          <p className="font-medium text-xl mt-6">Most times <span className="text-brand-green">its fun</span>. Sometimes <span className="underline decoration-brand-green">it solve problems.</span></p>
        </div>
        <img src="/images/variant=033.png" alt="hi" className="w-80 h-auto absolute z-0 top-[25%] left-0 rotate-45" />
        <img src="/images/variant=033.png" alt="hi" className="w-96 h-auto absolute z-0 top-[50%] right-0 -rotate-45" />
      </main>

      <div className="bg-brand-black text-brand-white px-[8%] flex gap-20 items-center">
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

        <img src="/images/me_1.jpg" className="h-96 w-96 border-8 border-brand-green -rotate-6 z-10" />
        <div>
          <p className="text-3xl font-medium">I am a <span className=" text-brand-green">Frontend Developer</span> from Bengaluru, India. When I am not developing websites, I design them. I join companies and somehow people start appreaciating their websites. I am still curious and Learning JavaScript.</p>
          <div className="flex gap-4 mt-10">
            <p className="font-medium bg-brand-green text-brand-black px-4 py-2 rotate-3">React JS</p>
            <p className="font-medium bg-brand-green text-brand-black px-4 py-2">Next JS</p>
            <p className="font-medium bg-brand-green text-brand-black px-4 py-2 rotate-6">Vue JS</p>
            <p className="font-medium bg-brand-green text-brand-black px-4 py-2 rotate-45">Nuxt JS</p>
            <p className="font-medium bg-brand-green text-brand-black px-4 py-2 rotate-90">THREE JS</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen relative bg-brand-black text-brand-white py-20">
        {/* career journey (add education) */}
        {/* life journey (add life events like moving cities) */}

        <div className="pl-[8%] flex">
          <div className="">
            <h3 className="text-brand-white text-7xl font-bold pt-28">Interested in <span className=" text-brand-green">my Journey?</span><br />No?, I will <span className="underline decoration-brand-green">tell it anyways.</span></h3>
            <p className="text-xs mt-6 font-medium">BTW, You <span className=" text-brand-green">liked</span> these leaves? <span className=" text-brand-green">Didn't you?</span></p>
            <p className="text-xs font-medium mt-1">Guess what?</p>
            <p className="text-xs font-medium mt-1">You will also find snakes below, <span className="underline decoration-brand-green">JK.</span></p>
          </div>
          <img src="/images/Jungle_Plant_4.png" alt="hi" className="-rotate-45 w-[600px] h-fit z-0 -mr-48 -mt-20" />
        </div>
        <div className="flex gap-40 -mt-52 pr-[8%]">
          <img src="/images/Jungle_Plant_1.png" alt="hi" className="rotate-45 w-[700px] h-fit z-0 -ml-40" />
          <div className="pt-40 flex flex-col gap-10">
            <div className="border-8 border-brand-green pl-8 pt-5 overflow-hidden">
              <p className="text-3xl font-medium">Senior Software Engineer</p>
              <div className="flex gap-10 text-sm my-3 ">
                <p className="font-semibold">TalkingLands</p>
                <p className="">Jan 2024 - Present</p>
              </div>
              <ul className="ml-4 pr-8">
                <li className="list-[square]">Joined as a Frontend Developer focusing on Consumer Websites and Web Applications.</li>
                <li className="list-[square]">Standardizing patterns and optimizing existing code base for both performance and developer experience.</li>
              </ul>
              <div className="flex justify-between items-end mt-4">
                <button className="bg-brand-green text-brand-black font-bold px-4 py-2">Know More</button>
                <div className="rotate-45 w-20 h-20 bg-brand-green text-brand-black font-bold -mb-10 -mr-10">
                </div>
              </div>
            </div>
            <div className="border-8 border-brand-green pl-8 pt-5 overflow-hidden">
              <p className="text-3xl font-medium">Software Engineer (UI Engineer 1)</p>
              <div className="flex gap-10 text-sm my-3 ">
                <p className="font-semibold">Recro (Flipkart)</p>
                <p className="">May 2023 - Jan 2024</p>
              </div>
              <ul className="ml-4 pr-8">
                <li className="list-[square]">Joined as a Frontend Developer focusing on Consumer Websites and Web Applications.</li>
                <li className="list-[square]">Standardizing patterns and optimizing existing code base for both performance and developer experience.</li>
              </ul>
              <div className="flex justify-between items-end mt-4">
                <button className="bg-brand-green text-brand-black font-bold px-4 py-2">Know More</button>
                <div className="rotate-45 w-20 h-20 bg-brand-green text-brand-black font-bold -mb-10 -mr-10">
                </div>
              </div>
            </div>
            <div className="border-8 border-brand-green pl-8 pt-5 overflow-hidden">
              <p className="text-3xl font-medium">Frontend Engineer</p>
              <div className="flex gap-10 text-sm my-3 ">
                <p className="font-semibold">Flam</p>
                <p className="">May 2022 - May 2023</p>
              </div>
              <ul className="ml-4 pr-8">
                <li className="list-[square]">Joined as a Frontend Developer focusing on Consumer Websites and Web Applications.</li>
                <li className="list-[square]">Standardizing patterns and optimizing existing code base for both performance and developer experience.</li>
              </ul>
              <div className="flex justify-between items-end mt-4">
                <button className="bg-brand-green text-brand-black font-bold px-4 py-2">Know More</button>
                <div className="rotate-45 w-20 h-20 bg-brand-green text-brand-black font-bold -mb-10 -mr-10">
                </div>
              </div>
            </div>
            <div className="border-8 border-brand-green pl-8 pt-5 overflow-hidden">
              <p className="text-3xl font-medium">Frontend Developer</p>
              <div className="flex gap-10 text-sm my-3 ">
                <p className="font-semibold">Habbit</p>
                <p className="">July 2021 - Apr 2023</p>
              </div>
              <ul className="ml-4 pr-8">
                <li className="list-[square]">Joined as a Frontend Developer focusing on Consumer Websites and Web Applications.</li>
                <li className="list-[square]">Standardizing patterns and optimizing existing code base for both performance and developer experience.</li>
              </ul>
              <div className="flex justify-between items-end mt-4">
                <button className="bg-brand-green text-brand-black font-bold px-4 py-2">Know More</button>
                <div className="rotate-45 w-20 h-20 bg-brand-green text-brand-black font-bold -mb-10 -mr-10">
                </div>
              </div>
            </div>
          </div>
        </div>
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


      <div className="px-[10%] py-40 flex gap-4 pt-[100vh] bg-brand-black">
        {/* placeholder for now */}
        <div className="h-40 w-40 border border-white bg-brand-blue"></div>
        <div className="h-40 w-40 border border-white bg-brand-green"></div>
        <div className="h-40 w-40 border border-white bg-brand-black"></div>
        <div className="h-40 w-40 border border-white bg-brand-gray"></div>
        <div className="h-40 w-40 border border-white bg-brand-white"></div>
      </div>
    </div>
  );
}

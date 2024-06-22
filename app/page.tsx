import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FcApproval } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Link from 'next/link';
import { RiSeparator } from "react-icons/ri";


export default function Home() {
  return (
    <main className="p-12 flex flex-col lg:gap-28 gap-16">
      <div className="">
        <div className="m-4 p-2 flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex justify-end">
            <Avatar className="w-32 h-32 lg:w-56 lg:h-56 shadow-green-400 shadow-2xl">
              <AvatarImage src="/fotoazr.svg" />
              <AvatarFallback>AZR</AvatarFallback>
            </Avatar>
          </div>
          <div className="col-span-2 flex flex-col">
            <div className="flex flex-row items-center gap-2 pb-4">
              <h1 className="text-lg sm:text-2xl md:text-4x lg:text-6xl font-bold">Welcome, I&apos;m Arturo</h1>
              <FcApproval className="lg:w-8 lg:h-6 w-6 h-6"/>
            </div>
            <h2 className="text-lg lg:pl-6 pb-2">Software Engineer</h2>
            <h3 className="text-lg lg:pl-6 pb-2">Frontend Developer, Data Science Trainee & Designer</h3>
            <p className="lg:pl-6 text-lg">I develop web applications using Next.js and Tailwind,<br />with a keen interest in Artificial Intelligence.</p>
            <div className="lg:pl-6 flex gap-2 text-4xl pt-2">
              <Link href={"https://www.linkedin.com/in/arturo-zilli-rios-7b6019315/"}>
                <div>
                  <FaLinkedin className="text-linkedin-blue hover:text-linkedin-dark-blue"/>
                </div>
              </Link>

              <Link href={"https://github.com/lccorpmx"}>
                <div>
                  <FaGithubSquare className="dark:text-white hover:text-gray-400"/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center"><h2 className="text-3xl md:text-5xl pb-6">Experience</h2></div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center flex-col text-center">
            <span className="text-lg md:text-3xl text-green-400">CannAssist AI: Artificial Intelligence in Endocannabinology</span>
            <p className="text-md md:text-lg">Comprehensive project on data engineering, encompassing the entire cycle<br />from data analysis to data science, as well as full-stack development and deployment on Kubernetes.</p>
            <RiSeparator className="text-green-400 text-2xl md:text-5xl"/>
          </div>
        </div>
      </div>

      <div>
      <div className="flex justify-center"><h2 className="text-3xl lg:text-5xl pb-6">Skills</h2></div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 items-center justify-items-center lg:pr-56 lg:pl-56">
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/nextjs.svg" width={150} height={150} alt="nextjs" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/tailwind.svg" width={120} height={120} alt="tailwind" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/python.svg" width={120} height={120} alt="python" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/fastapi.svg" width={120} height={120} alt="fastapi" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/sklearn.svg" width={120} height={120} alt="sklearn" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/pandas.svg" width={120} height={120} alt="pandas" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/nunpy.svg" width={120} height={120} alt="nunpy" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/js.svg" width={120} height={120} alt="js" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/sql.svg" width={120} height={120} alt="sql" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/prisma.svg" width={120} height={120} alt="prisma" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/docker.svg" width={120} height={120} alt="docker" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/kubernetes.svg" width={120} height={120} alt="kubernetes" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/supabase.svg" width={120} height={120} alt="supabase" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/canva.svg" width={120} height={120} alt="canva" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/figma.svg" width={120} height={120} alt="figma" />
  </div>
  <div className="overflow-hidden relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
    <Image src="/adobe.svg" width={120} height={120} alt="adobe" />
  </div>
</div>


      </div>

      <div>
        <div className="flex justify-center"><h2 className="text-3xl lg:text-5xl">Projects</h2></div>
        <div className="grid md:grid-cols-2 gap-6 pt-6 lg:pr-56 lg:pl-56">
        <section className="overflow-hidden relative rounded-xl lg:m-12  shadow-green-400 shadow-inner">
                            <div className='flex flex-col backdrop-blur-3xl overflow-hidden'>
                                <div className='flex items-center justify-between py-4 px-6'>
                                    <div className='truncate'>
                                        <a href={"https://ui-cann-ai.vercel.app/"} target='_blank' rel='noreferrer'>
                                            <h1 className='text-dark dark:text-white font-semibold text-lg lg:text-2xl z-20 hover:underline'>CannAsisst</h1>
                                        </a>
                                        <p className='text-xs lg:text-lg whitespace-normal'>First medicinal cannabis artificial intelligence in Mexico.</p>
                                    </div>
                                </div>
                                <div className='shadow-md'>
                                    <Image
                                        src={"/cannasisst.png"}
                                        priority={true}
                                        className='rounded-xl'
                                        alt={"CannAsisst"}
                                        width={400}
                                        height={200}
                                        sizes="100vw"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "contain"
                                        }} />
                                </div>
                            </div>
        </section>

        <section className="overflow-hidden relative rounded-xl lg:m-12  shadow-green-400 shadow-inner">
                            <div className='flex flex-col backdrop-blur-3xl overflow-hidden'>
                                <div className='flex items-center justify-between py-4 px-6'>
                                    <div className='truncate'>
                                        <a href={"https://weehub.vercel.app/"} target='_blank' rel='noreferrer'>
                                            <h1 className='text-dark dark:text-white font-semibold text-lg lg:text-2xl z-20 hover:underline'>WeeHub</h1>
                                        </a>
                                        <p className='text-xs lg:text-lg whitespace-normal'>It&apos;s an app for recreational cannabis in Mexico.</p>
                                    </div>
                                </div>
                                <div className='shadow-md'>
                                    <Image
                                        src={"/weehub.png"}
                                        priority={true}
                                        className='rounded-xl'
                                        alt={"weehub"}
                                        width={400}
                                        height={200}
                                        sizes="100vw"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "contain"
                                        }} />
                                </div>
                            </div>
        </section>

        <section className="overflow-hidden relative rounded-xl lg:m-12  shadow-green-400 shadow-inner">
                            <div className='flex flex-col backdrop-blur-3xl overflow-hidden'>
                                <div className='flex items-center justify-between py-4 px-6'>
                                    <div className='truncate'>
                                        <a href={"https://qalcc.vercel.app/"} target='_blank' rel='noreferrer'>
                                            <h1 className='text-dark dark:text-white font-semibold text-lg lg:text-2xl z-20 hover:underline'>LCCDice</h1>
                                        </a>
                                        <p className='text-xs lg:text-lg whitespace-normal '>It&apos;s an assistant app connected to OpenAI.</p>
                                    </div>
                                </div>
                                <div className='shadow-md'>
                                    <Image
                                        src={"/lccdice.png"}
                                        priority={true}
                                        className='rounded-xl'
                                        alt={"weehub"}
                                        width={400}
                                        height={200}
                                        sizes="100vw"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "contain"
                                        }} />
                                </div>
                            </div>
        </section>
        </div>
      </div>

    </main>
  );
}

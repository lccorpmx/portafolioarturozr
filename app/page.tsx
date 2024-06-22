import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FcApproval } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Link from 'next/link';
import { RiSeparator } from "react-icons/ri";


export default function Home() {
  return (
    <main className="p-12 flex flex-col gap-28">
      <div className="">
        <div className="m-4 p-2 flex flex-row items-center justify-center gap-8">
          <div className="flex justify-end">
            <Avatar className="w-56 h-56 shadow-green-400 shadow-2xl">
              <AvatarImage src="/fotoazr.svg" />
              <AvatarFallback>AZR</AvatarFallback>
            </Avatar>
          </div>
          <div className="col-span-2 flex flex-col">
            <div className="flex flex-row items-center gap-2 pb-4">
              <h1 className="text-6xl font-bold">Welcome, I&apos;m Arturo</h1>
              <FcApproval className="w-8 h-8"/>
            </div>
            <h2 className="text-4xl pl-6 pb-2">Software Engineer</h2>
            <h3 className="text-2xl pl-6 pb-2">Frontend Developer, Data Science Trainee & Designer</h3>
            <p className="pl-6 text-xl">I develop web applications using Next.js and Tailwind,<br />with a keen interest in Artificial Intelligence.</p>
            <div className="pl-6 flex gap-2 text-4xl pt-2">
              <Link href={"https://www.linkedin.com/in/arturo-zilli-rios-7b6019315/"}>
                <div>
                  <FaLinkedin className="text-linkedin-blue hover:text-linkedin-dark-blue"/>
                </div>
              </Link>

              <Link href={"https://github.com/lccorpmx"}>
                <div>
                  <FaGithubSquare className="text-white hover:text-gray-400"/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center"><h2 className="text-5xl pb-6">Experience</h2></div>
        <div className="flex justify-center">
          <div className="flex justify-center items-center flex-col text-center">
            <span className="text-3xl text-green-400">CannAssist AI: Artificial Intelligence in Endocannabinology</span>
            <p className="text-lg">Comprehensive project on data engineering, encompassing the entire cycle<br />from data analysis to data science, as well as full-stack development and deployment on Kubernetes.</p>
            <RiSeparator className="text-green-400 text-5xl"/>
          </div>
        </div>
      </div>

      <div>
      <div className="flex justify-center"><h2 className="text-5xl pb-6">Skills</h2></div>
      <div className="grid grid-cols-6 gap-6 items-center justify-items-center pr-56 pl-56">
        <div>
          <Image src={"/nextjs.svg"} width={150} height={150} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/tailwind.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/python.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/fastapi.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/sklearn.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/pandas.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/nunpy.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/js.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/sql.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/prisma.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/docker.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/kubernetes.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/supabase.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/canva.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/figma.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
        <div>
          <Image src={"/adobe.svg"} width={120} height={120} alt={"cepa"}/>
        </div>
      </div>
      </div>

      <div>
        <div className="flex justify-center"><h2 className="text-5xl">Projects</h2></div>
        <div className="grid grid-cols-2 gap-4 pt-6 pr-56 pl-56">
        <section className="overflow-hidden relative rounded-xl m-12  shadow-green-400 shadow-2xl">
                            <div className='flex flex-col backdrop-blur-3xl overflow-hidden'>
                                <div className='flex items-center justify-between py-4 px-6'>
                                    <div className='truncate'>
                                        <a href={"w"} target='_blank' rel='noreferrer'>
                                            <h1 className='text-dark dark:text-white font-semibold text-2xl z-20 hover:underline'>CannAsisst</h1>
                                        </a>
                                        <p className='text-dark/60 mix-blend-darken dark:text-inherit text-md'>First medicinal cannabis artificial intelligence in Mexico.</p>
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

        <section className="overflow-hidden relative rounded-xl m-12  shadow-green-400 shadow-2xl">
                            <div className='flex flex-col backdrop-blur-3xl overflow-hidden'>
                                <div className='flex items-center justify-between py-4 px-6'>
                                    <div className='truncate'>
                                        <a href={"w"} target='_blank' rel='noreferrer'>
                                            <h1 className='text-dark dark:text-white font-semibold text-2xl z-20 hover:underline'>WeeHub</h1>
                                        </a>
                                        <p className='text-dark/60 mix-blend-darken dark:text-inherit text-md'>It's an app for recreational cannabis in Mexico.</p>
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

        <section className="overflow-hidden relative rounded-xl m-12  shadow-green-400 shadow-2xl">
                            <div className='flex flex-col backdrop-blur-3xl overflow-hidden'>
                                <div className='flex items-center justify-between py-4 px-6'>
                                    <div className='truncate'>
                                        <a href={"w"} target='_blank' rel='noreferrer'>
                                            <h1 className='text-dark dark:text-white font-semibold text-2xl z-20 hover:underline'>LCCDice</h1>
                                        </a>
                                        <p className='text-dark/60 mix-blend-darken dark:text-inherit text-md'>It's an assistant app connected to OpenAI.</p>
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

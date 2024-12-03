import { SnapSection } from "@/components/SnapSection.component";
import Image from "next/image";
import Link from "next/link";
import {getDownloadLink, listTechnologies} from "@/app/actions";
import {SiAngular, SiDotnet, SiNestjs, SiPostgresql, SiReact, SiReaddotcv, SiSpringboot} from "react-icons/si";
import {fromTo} from "@/components/utils/utils";
import {CiStar} from "react-icons/ci";
import {RiNextjsLine} from "react-icons/ri";
import {FaAws} from "react-icons/fa";
import {Button} from "@react-email/button";

const stars = fromTo(0, 5);

export async function Projects() {
  const technologies = await listTechnologies()
  const cv= await getDownloadLink("ciprian-cv.pdf")

  return (
    <SnapSection id="experience">
      <div className='flex flex-col gap-10 items-center'>
        <div className='hidden md:flex xl:flex 2xl:flex flex-row justify-evenly w-full flex-wrap'>
          <Link href='https://www.trimble.com/en' target='_blank'>
            <Image src={'trimble.svg'} alt={"trimble"} width={150} height={150}
                   style={{width: "auto", height: "auto"}}/>
          </Link>
          <Link href='https://www.ensemblesoftware.ro/' target='_blank'>
            <Image src={'ensemble.svg'} alt={"ensemble-software"} width={150} height={150}
                   style={{width: "auto", height: "auto"}}/>
          </Link>
        </div>
        <p className='text-sm md:text-lg lg:text-lg'> Here are some of the technologies I&#39;ve worked with, but right
          now I&#39;m working with React, Nextjs,
          Postgres and AWS on a daily basis.</p>
        <div className='w-full'>
          <div className='grid grid-cols-3 gap-10 justify-center items-center'>
            {Object.keys(technologies).map(key => renderTechnology(key, technologies))}
          </div>
        </div>
        <div>
          <Button href={cv} target='_blank'><p className='flex flex-col gap-3 items-center hover:text-moonstone hover:drop-shadow-moonstone'><SiReaddotcv size={40} /><span>Here&#39;s my CV</span></p></Button>
        </div>
      </div>
    </SnapSection>
  )
}


const renderTechnology = <T extends Record<string, number>, >(key: keyof T, arr: T) => {
  switch (key) {
    case 'react':
      return (
        <div key={key} className=''>
          <div className={'flex flex-col items-center'}>
            <SiReact size={40}/>
            <div className="flex flex-row gap-3">
              {stars.map(i => <CiStar key={i} className={i < arr[key] ? 'text-moonstone' : 'white'} size={25}/>)}
            </div>
          </div>
        </div>
      )
    case 'angular':
      return (
        <div key={key} className=''>
          <div className={'flex flex-col items-center'}>
            <SiAngular size={40}/>
            <div className="flex flex-row gap-3">
              {stars.map(i => <CiStar key={i} className={ i < arr[key] ? 'text-moonstone': 'white'} size={25} />)}
            </div>
          </div>
        </div>
      )
    case 'nestjs':
      return (
        <div key={key} className=''>
          <div className={'flex flex-col items-center'}>
            <SiNestjs size={40}/>
            <div className="flex flex-row gap-3">
              {stars.map(i => <CiStar key={i} className={ i < arr[key] ? 'text-moonstone': 'white'} size={25} />)}
            </div>
          </div>
        </div>
      )
    case 'nextjs':
      return (
        <div key={key} className=''>
          <div className={'flex flex-col items-center'}>
            <RiNextjsLine size={40}/>
            <div className="flex flex-row gap-3">
              {stars.map(i => <CiStar key={i} className={ i < arr[key] ? 'text-moonstone': 'white'} size={25} />)}
            </div>
          </div>
        </div>
      )
    case 'springboot':
      return (
        <div key={key} className=''>
          <div className={'flex flex-col items-center'}>
            <SiSpringboot size={40}/>
            <div className="flex flex-row gap-3">
              {stars.map(i => <CiStar key={i} className={ i < arr[key] ? 'text-moonstone': 'white'} size={25} />)}
            </div>
          </div>
        </div>
      )
    case 'dotnet':
      return (
        <div key={key} className=''>
          <div className={'flex flex-col items-center'}>
            <SiDotnet size={40}/>
            <div className="flex flex-row gap-3">
              {stars.map(i => <CiStar key={i} className={ i < arr[key] ? 'text-moonstone': 'white'} size={25} />)}
            </div>
          </div>
        </div>
      )
    case 'aws':
      return (
        <div key={key} className=''>
          <div className={'flex flex-col items-center'}>
            <FaAws size={40}/>
            <div className="flex flex-row gap-3">
              {stars.map(i => <CiStar key={i} className={ i < arr[key] ? 'text-moonstone': 'white'} size={25} />)}
            </div>
          </div>
        </div>
      )
    case 'postgres':
      return (
        <div key={key} className=''>
          <div className={'flex flex-col items-center'}>
            <SiPostgresql size={40}/>
            <div className="flex flex-row gap-3">
              {stars.map(i => <CiStar key={i} className={ i < arr[key] ? 'text-moonstone': 'white'} size={25} />)}
            </div>
          </div>
        </div>
      )
  }
}
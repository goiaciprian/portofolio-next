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
  const cv = await getDownloadLink("ciprian-cv.pdf")

  return (
    <SnapSection id="experience">
      <div className='flex flex-col gap-5 sm:gap-10 items-center p-4 sm:p-8'>
        <div className='hidden md:flex flex-row flex-wrap justify-center gap-8 w-full'>
          <Link href='https://www.trimble.com/en' target='_blank'>
            <Image src={'trimble.svg'} alt={"trimble"} width={150} height={150}
                   style={{width: "auto", height: "auto"}}/>
          </Link>
          <Link href='https://www.ensemblesoftware.ro/' target='_blank'>
            <Image src={'ensemble.svg'} alt={"ensemble-software"} width={150} height={150}
                   style={{width: "auto", height: "auto"}}/>
          </Link>
        </div>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg px-4 text-center max-w-3xl'>
          Here are some of the technologies I&#39;ve worked with, but right now I&#39;m working 
          with React, Nextjs, Postgres and AWS on a daily basis.
        </p>
        <div className='w-full'>
          <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center'>
            {Object.keys(technologies).map(key => renderTechnology(key, technologies))}
          </div>
        </div>
        <div className="mt-8">
          <Button href={cv} target='_blank'>
            <p className='flex flex-col sm:flex-row items-center gap-2 hover:text-moonstone hover:drop-shadow-moonstone'>
              <SiReaddotcv className="w-6 sm:w-8 h-6 sm:h-8" />
              <span>Here&#39;s my CV</span>
            </p>
          </Button>
        </div>
      </div>
    </SnapSection>
  )
}

const renderTechnology = <T extends Record<string, number>, >(key: keyof T, arr: T) => {
  const baseClasses = 'flex flex-col items-center w-full max-w-[150px]';
  
  switch (key) {
    case 'react':
      return (
        <div key={key} className={baseClasses}>
          <div className={'flex flex-col items-center gap-2'}>
            <SiReact className="w-8 sm:w-10 h-8 sm:h-10" />
            <div className="flex flex-row gap-2">
              {stars.map(i => <CiStar key={i} className={i < arr[key] ? 'text-moonstone' : 'white'} size={20} />)}
            </div>
          </div>
        </div>
      )
    case 'angular':
      return (
        <div key={key} className={baseClasses}>
          <div className={'flex flex-col items-center gap-2'}>
            <SiAngular className="w-8 sm:w-10 h-8 sm:h-10" />
            <div className="flex flex-row gap-2">
              {stars.map(i => <CiStar key={i} className={i < arr[key] ? 'text-moonstone' : 'white'} size={20} />)}
            </div>
          </div>
        </div>
      )
    case 'nestjs':
      return (
        <div key={key} className={baseClasses}>
          <div className={'flex flex-col items-center gap-2'}>
            <SiNestjs className="w-8 sm:w-10 h-8 sm:h-10" />
            <div className="flex flex-row gap-2">
              {stars.map(i => <CiStar key={i} className={i < arr[key] ? 'text-moonstone' : 'white'} size={20} />)}
            </div>
          </div>
        </div>
      )
    case 'nextjs':
      return (
        <div key={key} className={baseClasses}>
          <div className={'flex flex-col items-center gap-2'}>
            <RiNextjsLine className="w-8 sm:w-10 h-8 sm:h-10" />
            <div className="flex flex-row gap-2">
              {stars.map(i => <CiStar key={i} className={i < arr[key] ? 'text-moonstone' : 'white'} size={20} />)}
            </div>
          </div>
        </div>
      )
    case 'springboot':
      return (
        <div key={key} className={baseClasses}>
          <div className={'flex flex-col items-center gap-2'}>
            <SiSpringboot className="w-8 sm:w-10 h-8 sm:h-10" />
            <div className="flex flex-row gap-2">
              {stars.map(i => <CiStar key={i} className={i < arr[key] ? 'text-moonstone' : 'white'} size={20} />)}
            </div>
          </div>
        </div>
      )
    case 'dotnet':
      return (
        <div key={key} className={baseClasses}>
          <div className={'flex flex-col items-center gap-2'}>
            <SiDotnet className="w-8 sm:w-10 h-8 sm:h-10" />
            <div className="flex flex-row gap-2">
              {stars.map(i => <CiStar key={i} className={i < arr[key] ? 'text-moonstone' : 'white'} size={20} />)}
            </div>
          </div>
        </div>
      )
    case 'aws':
      return (
        <div key={key} className={baseClasses}>
          <div className={'flex flex-col items-center gap-2'}>
            <FaAws className="w-8 sm:w-10 h-8 sm:h-10" />
            <div className="flex flex-row gap-2">
              {stars.map(i => <CiStar key={i} className={i < arr[key] ? 'text-moonstone' : 'white'} size={20} />)}
            </div>
          </div>
        </div>
      )
    case 'postgres':
      return (
        <div key={key} className={baseClasses}>
          <div className={'flex flex-col items-center gap-2'}>
            <SiPostgresql className="w-8 sm:w-10 h-8 sm:h-10" />
            <div className="flex flex-row gap-2">
              {stars.map(i => <CiStar key={i} className={i < arr[key] ? 'text-moonstone' : 'white'} size={20} />)}
            </div>
          </div>
        </div>
      )
    default:
      return null;
  }
}
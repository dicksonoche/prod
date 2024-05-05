import React from 'react'
import { LucideIcon } from 'lucide-react'

interface IInfoCardProps {
  title:string;
  Icon:LucideIcon;
  children:React.ReactNode
}

const InfoCard = ({title, Icon, children}: IInfoCardProps) => {
  return (
    <div className='w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-blue-600 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default InfoCard
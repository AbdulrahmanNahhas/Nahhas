import React from 'react'
import { Icons } from '../icons'
import { siteConfig } from '@/config/site'

function Footer() {
  return (
    <div className="bg-background border-t p-5 flex items-center justify-center">
        
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold inline">
          {siteConfig.name}
        </span>
        <span className="pl-2 font-semi hidden sm:inline">
        <span className='pr-2'>
        -

        </span>
            Made By Abdulrahman Nahhas
        </span>
    </div>
  )
}

export default Footer;
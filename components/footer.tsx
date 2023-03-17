import Image from 'next/image'
import Chicken from '../public/chicken-icon.png'
import { GitHub, LinkedIn, Language } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-base-200 text-neutral-content z-50">
      <div className="items-center grid-flow-col">
        <Image src={Chicken} className='text-primary h-10 w-10' alt='chicken logo'/>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href='https://Linkedin.com/in/edwincarr' target='_blank' className='cursor-pointer'>
          <LinkedIn />
        </a>
        <a href='https://github.com/edwincarr' target='_blank' className='cursor-pointer'>
          <GitHub />
        </a>
        <a href='https://edwincarrillo.co' target='_blank' className='cursor-pointer'>
          <Language />
        </a>
      </div>
    </footer>
  )
}

export default Footer

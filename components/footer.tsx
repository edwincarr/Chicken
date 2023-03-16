import Image from 'next/image'
import Chicken from '../public/chicken-icon.png'
import { GitHub, LinkedIn, Language } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-base-200 text-neutral-content">
      <div className="items-center grid-flow-col">
        <Image src={Chicken} className='text-primary h-10 w-10' alt='chicken logo'/>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <LinkedIn />
        <GitHub />
        <Language />
      </div>
    </footer>
  )
}

export default Footer

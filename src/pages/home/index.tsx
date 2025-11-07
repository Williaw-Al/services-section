import { AboutBox } from '../../components/about-box';
import { ActionButton } from '../../components/action-button';
import { HomeTemplates } from '../../components/home-templates';

import mainAvatar from '../../assets/images/main-avatar.webp'

import '../../assets/styles/home.css'
import { motion } from "motion/react"

export function Home() {

  return (
    <>
      <motion.main
        initial={{x: -100}}
        animate={{ x: 0 }}
        exit={{x: -2000, transition: {duration: 0.2}}} >
        <div className='main'>
          <div className='avatar-container'>
            <img src={mainAvatar} alt="Avatar do William" title="Avatar profissional" />
          </div>

          <AboutBox />

          <HomeTemplates />

        </div>

        <ActionButton>Quero Ter Mais Presença Digital</ActionButton>
      </motion.main>
    </>
  )
}
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import{
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation
         ('left')}>
            <motion.header {...slideAnimation("down")}>
              <img 
                src='./D_logo.png'
                alt="logo"
                className="w-9 h-8 object-contain"
              />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className='text-[8rem] leading-[8rem] font-bold w-fit pt-5'>
                  OWN <br className='xl:block hidden'/>YOUR <br className='xl:block hidden'/>SKIN.
                </h1>
              </motion.div>
              <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                <p className='max-w-md font-normal text-gray-600 text-base'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, doloremque tenetur eius, ea eos doloribus autem quasi quas atque nostrum alias at sed ratione modi voluptate quibusdam voluptatum nesciunt earum?
                </p>

                <CustomButton
                  type = "filled"
                  title = "Customize"
                  handleClick = {() => state.intro = false}
                  customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
                 />
              </motion.div>
            </motion.div>
          </motion.section>
          )}
    </AnimatePresence>
  )
}

export default Home
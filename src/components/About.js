import React from 'react';
//count up
import CountUp from 'react-countup';
//inter section observer hook
import { useInView } from 'react-intersection-observer';
// motion
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../variants';
//link
import { Link} from 'react-scroll';
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return ( 
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center gap-x-20 lg:gap-y-0 h-screen'>
        {/* image */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>
         {/* text */}
         <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer with over 2 years of exprience.
          </h3>
          <p className='mb-6'>
          Skilled freelance graphic designer with 8+ years of experience seeking a role to build creative visual solutions for clients. Utilizing an eye for detail and cutting-edge design knowledge.</p>
          {/*stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12 '>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={3} duration={5} /> : null }
              </div>
              <div className='font-primery text-sm tracking-[2px]'>
                Years of <br /> Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView? <CountUp start={0} end={5} duration={5} /> : null}
                K+
              </div>
              <div className='font-primery text-sm tracking-[2px]'>
                Projects <br /> Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={12} duration={5} /> : null}
                K+
              </div>
              <div className='font-primery text-sm tracking-[2px]'>
                Setisfied <br /> Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <Link
            activeClass='active' 
            smooth= {true}
            spy={true}
             to='contact'>
            <button className='btn btn-lg'>Contact me</button>
            </Link>
            <Link 
          activeClass='active' 
          smooth= {true}
          spy={true}
           to='home'
            className='text-gradient btn-link'>
             <button>My Portfolio</button> 
            </Link>
          </div>
         </motion.div>
        
      </div>
    </div>
    </section>
  );
  };


export default About;

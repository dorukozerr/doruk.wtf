import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';

import { useSceneStateContext } from '~/context/scene-state';
import { useWindowDimensionsContext } from '~/context/window-dimensions';
import { sidebarVariants, navVariants, navItemVariants } from '~/lib/motion';

const navigationLink = [
  { label: 'Home', link: '/' },
  { label: 'Projects', link: '/projects' },
  { label: 'Contact', link: '/contact' }
];

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { triggerRef } = useSceneStateContext();
  const { height } = useWindowDimensionsContext();

  return (
    <>
      <header className='fixed top-0 left-0 z-20 hidden w-full items-center justify-center p-4 text-white md:flex'>
        <div className='flex h-full w-full items-center justify-between rounded-md bg-white/10 px-8 py-4 backdrop-blur-2xl'>
          <button ref={triggerRef} className='flex items-center justify-center'>
            <h1 className='text-4xl'>doruk</h1>
          </button>
          <div className='flex items-center justify-center gap-6'>
            {navigationLink.map(({ link, label }, index) => (
              <button
                key={`desktopNavLink-${index}`}
                className='cursor-pointer'
                onClick={() => navigate(link)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </header>
      <div
        className='fixed top-4 left-4 flex w-[300px] items-stretch justify-start overflow-hidden rounded-[20px] md:hidden'
        style={{ height: `${height - 32}px`, zIndex: isOpen ? 50 : 10 }}
      >
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          className='w-[300px]'
        >
          <motion.div
            className='absolute top-0 bottom-0 left-0 w-[300px] bg-white/10 backdrop-blur-2xl'
            variants={sidebarVariants}
          />
          <motion.ul
            className='absolute top-24 m-0 w-full list-none space-y-4 px-4'
            variants={navVariants}
          >
            {navigationLink.map(({ link, label }, index) => (
              <motion.button
                key={`mobileNavLink-${index}`}
                className='flex cursor-pointer items-center justify-start p-0 text-lg text-white'
                variants={navItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate(link);
                  setIsOpen(false);
                }}
              >
                {label}
              </motion.button>
            ))}
          </motion.ul>
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
      </div>
    </>
  );
};

const Path = (props: PathProps) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='#fff'
    strokeLinecap='round'
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button
    className='absolute top-4 left-4 z-50 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full'
    onClick={toggle}
  >
    <svg width='23' height='23' viewBox='0 0 23 23'>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' }
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' }
        }}
      />
    </svg>
  </button>
);

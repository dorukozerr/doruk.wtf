import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';

import { useWindowDimensionsContext } from '~/context/window-dimensions';
import { sidebarVariants, navVariants, navItemVariants } from '~/lib/motion';
import { navigationLinks } from '~/lib/navigation-links';

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { height } = useWindowDimensionsContext();

  return (
    <>
      <SidebarToggleButton
        isOpen={isOpen}
        setIsOpen={(newState) => setIsOpen(newState)}
      />
      <div
        className='pointer-events-none fixed top-4 left-4 flex w-[300px] items-stretch justify-start overflow-hidden rounded-[20px] md:hidden'
        style={{ height: `${height - 32}px`, zIndex: 50 }}
      >
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          className='w-[300px]'
        >
          <motion.div
            className='absolute top-0 bottom-0 left-0 w-[300px] bg-white/10 backdrop-blur-xs'
            variants={sidebarVariants}
          />
          <motion.ul
            className='absolute top-24 m-0 w-full list-none space-y-4 px-4'
            variants={navVariants}
          >
            {navigationLinks.map(({ link, label }, index) => (
              <motion.button
                key={`mobileNavLink-${index}`}
                className='pointer-events-auto flex cursor-pointer items-center justify-start p-0 text-lg text-white'
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
        </motion.nav>
      </div>
    </>
  );
};

const Path = (props: {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='#fff'
    strokeLinecap='round'
    {...props}
  />
);

const SidebarToggleButton = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;
}) => (
  <motion.nav
    className='fixed top-8 left-8 z-60 flex h-[50px] w-[50px] rounded-full sm:hidden'
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
  >
    <button
      className='flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full'
      onClick={() => setIsOpen(!isOpen)}
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
  </motion.nav>
);

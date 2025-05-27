import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import { useSceneStateContext } from '~/context/scene-state';
import { navigationLinks } from '~/lib/navigation-links';

export const Header = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { triggerRef } = useSceneStateContext();

  const navLinkBottomLineLeftValue = buttonRef?.current
    ? buttonRef.current?.getClientRects()[0]?.right -
      buttonRef.current?.getClientRects()[0]?.width -
      16
    : 0;

  return (
    <header className='fixed top-0 left-0 z-20 hidden w-full items-center justify-center p-4 text-white md:flex'>
      <div className='flex h-full w-full items-center justify-between rounded-md bg-white/10 px-8 py-4 backdrop-blur-2xl'>
        <button
          ref={triggerRef}
          className='flex cursor-not-allowed items-center justify-center'
        >
          <h1 className='text-4xl'>doruk</h1>
        </button>
        <div className='flex items-center justify-center gap-6'>
          {navigationLinks.map(({ link, label }, index) => (
            <button
              key={`desktopNavLink-${index}`}
              ref={location.pathname === link ? buttonRef : null}
              className={`transion-all cursor-pointer duration-500 ${location.pathname === link ? 'text-white' : 'text-white/60'}`}
              onClick={() => navigate(link)}
            >
              {label}
            </button>
          ))}
          <motion.div
            key='headerActiveLinkLine'
            className='absolute bottom-4 h-[1px] bg-white'
            animate={{
              width: buttonRef.current?.clientWidth ?? 0,
              left: navLinkBottomLineLeftValue ?? 9999
            }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 12.5,
              bounce: 1
            }}
          />
        </div>
      </div>
    </header>
  );
};

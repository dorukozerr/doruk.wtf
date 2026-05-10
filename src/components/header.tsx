import { useLocation, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { useWindowCTX } from "#/contexts/window";
import { links } from "#/static/links";

export const Header = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, left: 9999 });

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    triggerRef,
    dimensions: { width },
  } = useWindowCTX();

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getClientRects()[0];

      setDimensions({
        width: buttonRef.current.clientWidth,
        left: rect ? rect.right - rect.width - 16 : 9999,
      });
    }
  }, [pathname, width]);

  return (
    <header className="fixed top-0 left-0 z-20 hidden w-full items-center justify-center p-4 text-white md:flex">
      <div className="flex h-full w-full items-center justify-between rounded-md bg-white/10 px-8 py-4 backdrop-blur-2xl">
        <button ref={triggerRef} className="flex cursor-not-allowed items-center justify-center">
          <h1 className="text-4xl font-thin">doruk</h1>
        </button>
        <div className="flex items-center justify-center gap-6">
          {links.map(({ to, label }, index) => (
            <button
              key={`desktopNavLink-${index}`}
              ref={pathname === to ? buttonRef : null}
              className={`transion-all cursor-pointer text-lg duration-500 ${location.pathname === to ? "text-white" : "text-white/60"}`}
              onClick={() => navigate({ to })}
            >
              {label}
            </button>
          ))}
          <motion.div
            key="headerActiveLinkLine"
            className="absolute bottom-4 h-px bg-white"
            animate={{
              width: dimensions.width,
              left: dimensions.left,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12.5,
              bounce: 1,
            }}
          />
        </div>
      </div>
    </header>
  );
};

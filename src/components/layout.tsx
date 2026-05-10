import { useLocation } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { useSpring } from "motion/react";
import { motion, useScroll } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

import { Footer } from "#/components/footer";
import { Header } from "#/components/header";
import { MobileSidebar } from "#/components/mobile-sidebar";
import { P5BG } from "#/components/p5bg";
import { useWindowCTX } from "#/contexts/window";

export const Layout = () => {
  const container = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const {
    dimensions: { height, width },
    isHovered
  } = useWindowCTX();

  const [ch, setCH] = useState(height);

  const { scrollY } = useScroll({ container });
  const top = useSpring(scrollY, {
    stiffness: 500,
    damping: 80,
    mass: 5
  });

  useLayoutEffect(() => {
    if (container.current) {
      const containerHeight = container.current.getBoundingClientRect().height;
      if (height !== ch) setCH(containerHeight);
    }
  }, [ch, height, width, pathname]);

  useLayoutEffect(() => {
    container.current?.scrollTo({ top: 0, behavior: "smooth" });
    top.jump(0);
  }, [pathname, top]);

  return (
    <div ref={container} className="relative h-full w-full overflow-x-hidden overflow-y-auto">
      <motion.div
        className="absolute left-0 flex h-full w-full items-center justify-center overflow-visible"
        key={width + width}
        style={{ top }}
      >
        <P5BG />
      </motion.div>
      {isHovered ? null : <Outlet />}
      <Header />
      <MobileSidebar />
      <Footer />
    </div>
  );
};

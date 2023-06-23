"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const BackgroundEffects = () => {
  const pathname = usePathname();
  const [backgroundFixed, setBackgroundFixed] = useState(false);
 
  useEffect(() => {
    if (pathname === "/changelog") {
      setBackgroundFixed(true);
    } else {
      setBackgroundFixed(false);
    }
  }, [pathname, backgroundFixed]);

  return (
    <>
      <div className={`bg background-fixed-${backgroundFixed}`}></div>
      <div className={`bg2 background-fixed-${backgroundFixed}`}></div>
    </>
  );
};

export default BackgroundEffects;

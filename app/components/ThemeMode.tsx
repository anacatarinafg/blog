"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";

export default function ThemeMode() {
  const { setTheme, resolvedTheme } = useTheme();
  const [icon, setIcon] = useState(false);

  // This will make our icon appear correctly according to the theme
  useEffect(() => {
    setIcon(true);
  }, []);

  if (!icon) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <BsSun /> : <BsFillMoonFill />}
    </button>
  );
}

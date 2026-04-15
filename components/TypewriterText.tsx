"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  start?: boolean;
  className?: string;
};

export default function TypewriterText({
  text,
  speed = 22,
  start = true,
  className = "",
}: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) {
      setDisplayed("");
      return;
    }

    setDisplayed("");
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, start]);

  return <p className={className}>{displayed}</p>;
}
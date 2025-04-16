"use client";

import { useCallback, useEffect, useState } from "react";
import { SC } from "./ProgressBar.styles";

const getScrolledPercentage = () => {
  const docElement = document.documentElement;
  const winScroll = document.body.scrollTop || docElement.scrollTop;
  const height = docElement.scrollHeight - docElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  return scrolled;
};

export const ProgressBar = () => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  const onScrollListener = useCallback(() => {
    const scrolledPercentage = getScrolledPercentage();

    setProgressPercentage(scrolledPercentage);
  }, []);

  const handleOnSroll = useCallback(() => {
    window.addEventListener("scroll", onScrollListener);

    return () => {
      window.removeEventListener("scroll", onScrollListener);
    };
  }, [onScrollListener]);

  // Calculate the initial scroll percentage
  useEffect(() => setProgressPercentage(getScrolledPercentage()), []);
  useEffect(handleOnSroll, [handleOnSroll]);

  return (
    <SC.Container>
      <SC.ProgressContainer style={{ width: `${progressPercentage}%` }} />
    </SC.Container>
  );
};

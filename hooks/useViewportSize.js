import useWindowSize from './useWindowSize';
import { useEffect, useState } from 'react';
import { DEVICE_ORIENTATION, VIEWPORT_SIZES } from '../constants';

export default function useViewportSize() {
  const { windowWidth, windowHeight } = useWindowSize()
  const [xl, setXl] = useState(false)
  const [lg, setLg] = useState(false)
  const [md, setMd] = useState(false)
  const [sm, setSm] = useState(false)
  const [orientation, setOrientation] = useState(DEVICE_ORIENTATION.PORTRAIT)
  
  useEffect(() => {
    setSm(windowWidth <= VIEWPORT_SIZES.SM)
    setMd((windowWidth > VIEWPORT_SIZES.SM && windowWidth <= VIEWPORT_SIZES.MD))
    setLg((windowWidth > VIEWPORT_SIZES.MD && windowWidth <= VIEWPORT_SIZES.LG))
    setXl((windowWidth > VIEWPORT_SIZES.LG))
    setOrientation(windowWidth > windowHeight ? DEVICE_ORIENTATION.LANDSCAPE : DEVICE_ORIENTATION.PORTRAIT)
  }, [windowWidth, windowHeight]);
  
  return { xl, lg, md, sm, orientation }
}

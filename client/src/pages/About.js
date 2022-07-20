import React, { useRef } from 'react'
import Book from '../components/Book/Book'
import { useIsInViewport } from '../hooks/useInViewport';

const About = () => {
  const ref = useRef(null)
  const isInViewport = useIsInViewport(ref);

  console.log('custom', isInViewport)
  
  return (
    <div className='section about' ref={ref}>
      <Book />
    </div>
  )
}

export default About
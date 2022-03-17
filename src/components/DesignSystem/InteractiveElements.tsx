import React from 'react'
import Navigation from '../Header/Navigation';

const InteractiveElements = () => {

  const flowSpace = {'--flow-space': '4rem', flexBasis: '100%', margin: 'auto', display: 'flex',flexDirection: 'column', placeItems: 'center'} as React.CSSProperties;

  const headings = ['Active', 'Hovered', 'Idle'];

  return (
    <section style={{marginBottom: '50vh'}} className='flow'>
        <h2 className='numbered-title'><span>03</span>Interactive Elements</h2>
        
        {/* Navigation */}
        <div>
          <Navigation toggle={true}/>
        </div>


        <div className='flex'>
          {/* Explore Button */}
          <div style={{marginTop: '5rem', flexBasis: '100%'}} className='flex'>
              <a className='uppercase ff-serif text-dark bg-white large-button fs-600' href="/design-system">Explore</a>
          </div>

          <div className='flow' style={flowSpace}>
            {/* Tabs */}
            <div className='tabs-navigation underline-indicators flex'>
              <button className='active uppercase letter-spacing-2 text-light ff-sans-cond'>Moon</button>
              <button className='uppercase letter-spacing-2 text-light ff-sans-cond'>Mars</button>
              <button className='uppercase letter-spacing-2 text-light ff-sans-cond'>Europa</button>
            </div>

            {/* Dots */}
            <div className='dots-list flex'>
              <button className='active'><span className='sr-only'>Slide title</span></button>
              <button><span className='sr-only'>Slide title</span></button>
              <button><span className='sr-only'>Slide title</span></button>
            </div>

            {/* Small Buttons */}
            <div className='small-button flex ff-serif'>
              <button className='active'>1</button>
              <button className='bg-dark text-white'>2</button>
              <button className='bg-dark text-white'>3</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default InteractiveElements
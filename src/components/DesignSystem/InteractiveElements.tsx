import React from 'react'

const InteractiveElements = () => {

  const flowSpace = {'--flow-space': '4rem', flexBasis: '100%', margin: 'auto', display: 'flex',flexDirection: 'column', placeItems: 'center'} as React.CSSProperties;

  return (
    <section style={{marginBottom: '50vh'}} className='flow'>
        <h2 className='numbered-title'><span>03</span>Interactive Elements</h2>
        
        {/* Navigation */}
        <div>
          <nav>
            <ul className="primary-navigation underline-indicators flex">
              <li className='active'><a className="uppercase text-white letter-spacing-2" href="#"><span>01</span>Active</a></li>
              <li><a className="uppercase text-white letter-spacing-2" href="#"><span>02</span>Hovered</a></li>
              <li><a className="uppercase text-white letter-spacing-2" href="#"><span>03</span>Idle</a></li>
            </ul>
          </nav>
        </div>


        <div className='flex'>
          {/* Explore Button */}
          <div style={{marginTop: '5rem', flexBasis: '100%'}} className='flex'>
              <a className='uppercase ff-serif text-dark bg-white large-button fs-600' href="#">Explore</a>
          </div>

          <div className='flow' style={flowSpace}>
            {/* Tabs */}
            <div className='tabs-navigation underline-indicators flex'>
              <button aria-selected='true' className='active uppercase letter-spacing-2 text-light ff-sans-cond'>Moon</button>
              <button aria-selected='false' className='uppercase letter-spacing-2 text-light ff-sans-cond'>Mars</button>
              <button aria-selected='false' className='uppercase letter-spacing-2 text-light ff-sans-cond'>Europa</button>
            </div>

            {/* Dots */}
            <div className='dots-list flex'>
              <button className='active' aria-selected='true'><span className='sr-only'>Slide title</span></button>
              <button aria-selected='false'><span className='sr-only'>Slide title</span></button>
              <button aria-selected='false'><span className='sr-only'>Slide title</span></button>
            </div>

            {/* Small Buttons */}
            <div className='small-button flex ff-serif'>
              <button className='active' aria-selected='true'>1</button>
              <button className='bg-dark text-white' aria-selected='false'>2</button>
              <button className='bg-dark text-white' aria-selected='false'>3</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default InteractiveElements
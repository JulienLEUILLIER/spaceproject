import React from 'react'

const InteractiveElements = () => {
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

        {/* Explore Button */}
        <div style={{marginTop: '5rem'}} className='flex'>
            <a className='uppercase ff-serif text-dark bg-white large-button fs-600 ' href="#">Explore</a>
        </div>
    </section>
  )
}

export default InteractiveElements
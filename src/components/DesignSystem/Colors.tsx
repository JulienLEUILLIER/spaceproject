import React from 'react'

const Colors = () => {
  return (
    <section className='flow' id="colors">
          <h2 className='numbered-title'><span>01</span> colors</h2>
          <div className='flex'>

            <div style={{flexGrow: 1}}>
              <div style={{padding: '3rem 1rem 1rem', border: '1px solid white'}}>#0B0D17</div>
              <p><span className='text-light'>RGB 11, 13, 23</span></p>
              <p><span className='text-light'>HSL 230°, 35%, 7%</span></p>
            </div>

            <div style={{flexGrow: 1}}>
              <div className='bg-light text-dark' style={{padding: '3rem 1rem 1rem'}}>#0B0D17</div>
              <p><span className='text-light'>RGB 208, 214, 249</span></p>
              <p><span className='text-light'>HSL 23°, 77%, 90%</span></p>
            </div>

            <div style={{flexGrow: 1}}>
              <div className="bg-white text-dark" style={{padding: '3rem 1rem 1rem', border: '1px solid white'}}>#FFFFFF</div>
              <p><span className='text-light'>RGB 255, 255, 255</span></p>
              <p><span className='text-light'>HSL 0°, 0%, 100%</span></p>
            </div>
          </div>
        </section>
  )
}

export default Colors
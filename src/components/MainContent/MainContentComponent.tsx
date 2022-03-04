import { Wrapper } from "./MainContentComponent.styles"

const MainContentComponent = () => {
    return (
        <Wrapper className='grid-container'>
            <div>
                <h1 className="text-light uppercase ff-sans-cond fs-500 letter-spacing-1">So you want to travel to <span className="uppercase fs-900 ff-serif text-white">space</span></h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div>
                <a className='uppercase ff-serif text-dark bg-white large-button fs-600' href="/design-system">Explore</a>
            </div>
        </Wrapper>
    )
}

export default MainContentComponent
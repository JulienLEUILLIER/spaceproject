import { Wrapper } from "./MainContentComponent.styles"

interface MainContentComponentProps {
    leftComponent: JSX.Element;
    rightComponent: JSX.Element;
}

const MainContentComponent = ({leftComponent, rightComponent}: MainContentComponentProps) => {
    return (
        <Wrapper>
            {leftComponent}
            {rightComponent}
        </Wrapper>
    )
}

export default MainContentComponent
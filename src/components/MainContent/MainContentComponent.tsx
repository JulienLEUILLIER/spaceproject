import { Wrapper } from "./MainContentComponent.styles"

interface MainContentComponentProps {
    leftComponent: JSX.Element;
    rightComponent: JSX.Element;
    className: string
}

const MainContentComponent = ({leftComponent, rightComponent, className}: MainContentComponentProps) => {
    return (
        <Wrapper className={className}>
            {leftComponent}
            {rightComponent}
        </Wrapper>
    )
}

export default MainContentComponent
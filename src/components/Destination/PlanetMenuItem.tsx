

const PlanetMenuItem = ({ planet }: { planet: string }) => {
    return (
        <div className="letter-spacing-1 ff-sans-cond uppercase text-light fs-400">
            {planet}
        </div>
    )
}

export default PlanetMenuItem
import PlanetMenuItem from './PlanetMenuItem'

const DestinationText = ({ planets }: { planets: string[] }) => {
  return (
    <div className='tabs-navigation underline-indicators flex'>
      {planets.map((planet, index) => <PlanetMenuItem key={index} planet={planet} />)}
    </div>
  )
}

export default DestinationText
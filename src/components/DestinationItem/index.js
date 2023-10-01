import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item

  return (
    <li className="item-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem

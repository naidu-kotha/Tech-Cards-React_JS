// Write your code here.
import './index.css'

const TechCards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`tech-card ${className}`}>
      <h1 className="sub-heading">{title}</h1>
      <p className="details">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default TechCards

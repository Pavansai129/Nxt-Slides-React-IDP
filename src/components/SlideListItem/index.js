import SlidesContext from '../../context'
import './index.css'

const SlideListItem = props => {
  const {details, serialNumber} = props
  const {heading, description} = details
  return (
    <SlidesContext.Consumer>
      {value => {
        const {changeActiveTab, activeIndex} = value
        const isActive = activeIndex === serialNumber - 1
        const activeTabClassName = isActive ? 'active-tab' : ''

        const onClickSlideTab = () => {
          changeActiveTab(serialNumber - 1)
        }

        return (
          <li
            className={`slide-list-item ${activeTabClassName}`}
            onClick={onClickSlideTab}
            testid={`slideTab${serialNumber}`}
          >
            <p className="slideNumber">{serialNumber}</p>
            <div className="heading-description-container">
              <h1 className="heading">{heading}</h1>
              <p className="description">{description}</p>
            </div>
          </li>
        )
      }}
    </SlidesContext.Consumer>
  )
}

export default SlideListItem

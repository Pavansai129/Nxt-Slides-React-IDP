import {v4 as uuidv4} from 'uuid'
import SlidesContext from '../../context'
import './index.css'

const NewButton = () => (
  <SlidesContext.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value
      const onClickAddButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'description',
        }
        addNewItem(item)
        changeActiveTab(activeIndex + 1)
      }
      return (
        <div className="new-button-container">
          <button
            type="button"
            onClick={onClickAddButton}
            className="new-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-image"
            />
            <h1 className="new-text">New</h1>
          </button>
        </div>
      )
    }}
  </SlidesContext.Consumer>
)

export default NewButton

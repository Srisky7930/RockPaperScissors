import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  PopUpContainer,
  RulesButton,
  ResultView,
  RulesImage,
} from './styledComponents'

const ReactPopUp = () => (
  <PopUpContainer>
    <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
      {close => (
        <>
          <ResultView>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <RiCloseLine />
            </button>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </ResultView>
        </>
      )}
    </Popup>
  </PopUpContainer>
)
export default ReactPopUp

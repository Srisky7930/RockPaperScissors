import {Component} from 'react'

import Playing from '../Playing'
import ReactPopUp from '../ReactPopUp'

import {
  AppContainer,
  ScoreCard,
  MiddleContainer,
  Heading,
  Heading2,
  Score,
  PopupContainer,
  PlayingContainer,
  ResultContainer,
  ResultImages,
  ListItems,
  GameResult,
  PlayAgain,
  ButtonContainer,
  Container,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    choicesListItems: choicesList,
    score: 0,
    showItem: true,
    player1: '',
    player2: '',
    resultGame: '',
  }

  getResult = (player1, player2) => {
    if (player1 === 'ROCK') {
      switch (player2) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        case 'ROCK':
          return 'IT IS DRAW'
        default:
          return null
      }
    } else if (player1 === 'PAPER') {
      switch (player2) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'PAPER':
          return 'IT IS DRAW'
        default:
          return null
      }
    } else if (player1 === 'SCISSORS') {
      switch (player2) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'IT IS DRAW'
        default:
          return null
      }
    } else {
      return null
    }
  }

  getScore = result => {
    if (result === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score,
      }))
    }
  }

  onClickPlayer = id => {
    const {choicesListItems} = this.state
    const randomPlayer =
      choicesListItems[Math.floor(Math.random() * choicesListItems.length)]

    const player = choicesListItems.filter(each => each.id === id)
    console.log(player[0].id, randomPlayer.id)
    const result = this.getResult(player[0].id, randomPlayer.id)
    const scoreCount = this.getScore(result)
    this.setState({
      showItem: false,
      player1: player[0].imageUrl,
      player2: randomPlayer.imageUrl,
      resultGame: result,
    })
  }

  onClickPlayAgainButton = () => {
    this.setState({
      showItem: true,
    })
  }

  render() {
    const {
      choicesListItems,
      score,
      showItem,
      player1,
      player2,
      resultGame,
    } = this.state

    return (
      <AppContainer>
        <ScoreCard>
          <MiddleContainer>
            <Heading>
              Rock <br /> Paper <br /> Scissors
            </Heading>
            <Score>
              <Heading2>
                Score <br /> {score}
              </Heading2>
            </Score>
          </MiddleContainer>
        </ScoreCard>

        <PlayingContainer>
          {showItem ? (
            <ListItems>
              {choicesListItems.map(each => (
                <Playing
                  eachItems={each}
                  key={each.id}
                  onClickPlayer={this.onClickPlayer}
                />
              ))}
            </ListItems>
          ) : (
            <ResultContainer>
              <Container>
                <ResultImages src={player1} alt="your choice" />
                <GameResult> {resultGame} </GameResult>
                <ResultImages src={player2} alt="opponent choice" />
              </Container>

              <ButtonContainer>
                <PlayAgain onClick={this.onClickPlayAgainButton}>
                  PLAY AGAIN
                </PlayAgain>
              </ButtonContainer>
            </ResultContainer>
          )}
        </PlayingContainer>
        <PopupContainer>
          <ReactPopUp />
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default Game

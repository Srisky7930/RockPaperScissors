import {List, Image, Button} from './styledComponents'

const Playing = props => {
  const {eachItems, onClickPlayer} = props
  const {id, imageUrl} = eachItems

  const onClickButton = () => {
    onClickPlayer(id)
  }

  return (
    <List>
      <Button
        type="button"
        data-testid={id.toLowerCase().concat('Button')}
        onClick={onClickButton}
      >
        <Image src={imageUrl} alt="imageUrl" />
      </Button>
    </List>
  )
}

export default Playing

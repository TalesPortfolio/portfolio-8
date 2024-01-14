import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
  background: 'bg_card' | 'bg_card2'
}

const ProductsList = ({ background, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    <List>
      <Product />
      <Product />
      <Product />
      <Product />
    </List>
  </Container>
)

export default ProductsList

import Product from '../Product'
import { Container, List, Title } from './styles'

type Props = {
  title: string
  background: 'bg_card' | 'bg_card2'
}

const ProductsList = ({ background, title }: Props) => (
  <Container>
    <Title>{title}</Title>
    <List>
      <Product
        category="€0,00 EUR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        image="//placehold.it/222x250"
        title="Nome do laço"
      />
      <Product
        category="€0,00 EUR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        image="//placehold.it/222x250"
        title="Nome do laço"
      />
      <Product
        category="€0,00 EUR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        image="//placehold.it/222x250"
        title="Nome do laço"
      />
      <Product
        category="€0,00 EUR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        image="//placehold.it/222x250"
        title="Nome do laço"
      />
    </List>
    <List>
      <Product
        category="€0,00 EUR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        image="//placehold.it/222x250"
        title="Nome do laço"
      />
      <Product
        category="€0,00 EUR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        image="//placehold.it/222x250"
        title="Nome do laço"
      />
      <Product
        category="€0,00 EUR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        image="//placehold.it/222x250"
        title="Nome do laço"
      />
      <Product
        category="€0,00 EUR"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        image="//placehold.it/222x250"
        title="Nome do laço"
      />
    </List>
  </Container>
)

export default ProductsList

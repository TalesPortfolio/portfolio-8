import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do produto</Titulo>
    <Tag>Categoria</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non possimus
      tempore repellat rerum. Ad itaque temporibus cumque suscipit obcaecati
      atque dolor corrupti ea. Eaque eum obcaecati hic perferendis adipisci
      veniam, asperiores quod sed.
    </Descricao>
  </Card>
)

export default Product

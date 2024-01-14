import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  category: string
  description: string
  image: string
}

const Product = ({ title, category, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product

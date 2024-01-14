import { Imagem } from './styles'

import bannerImg from '../../assets/images/banenr.gif'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}></Imagem>
  </>
)

export default Banner

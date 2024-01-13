import { Imagem } from './styles'

import bannerImg from '../../assets/images/banenr.gif'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}></Imagem>
)

export default Banner

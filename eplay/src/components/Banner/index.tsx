import { Imagem } from './styles'

import bannerImg from '../../assets/images/baner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}></Imagem>
)

export default Banner

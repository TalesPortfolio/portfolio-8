import { HeaderBar, Logo, LinkCard, Links, LinksItem } from './styles'

import logo from '../../assets/images/lacoLogo.png'
import Link_card from '../../assets/images/bolsa-de-compras.gif'

const Header = () => (
  <HeaderBar>
    <Logo src={logo} alt="Logo Magazin" />
    <nav>
      <Links>
        <LinksItem>
          <a href="#">Catégorie</a>
        </LinksItem>
        <LinksItem>
          <a href="#">Nouvelles</a>
        </LinksItem>
        <LinksItem>
          <a href="#">Promos</a>
        </LinksItem>
      </Links>
    </nav>
    <div>
      <LinkCard href="#">
        0- produit(s)
        <img src={Link_card} alt="Shop buy" />
      </LinkCard>
    </div>
  </HeaderBar>
)

export default Header

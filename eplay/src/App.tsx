import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss, Container } from './styles'
import Product from './components/Product'
import ProductsList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductsList title="Promos" background="bg_card" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <Banner />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App

import { AvatarList, Header, CardComponent } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: 'dnc-avatar.svg',
      name: 'Nome Sobrenome',
      subtitle: currencyConverter(1223.54),
    },
    {
      avatar: 'dnc-avatar.svg',
      name: 'Nome Sobrenome',
      subtitle: currencyConverter(1223.54),
    },
    {
      avatar: 'dnc-avatar.svg',
      name: 'Nome Sobrenome',
      subtitle: currencyConverter(1223.54),
    },
  ]
  return (
    <>
      <Header></Header>
      <Container maxWidth="lg">
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}
export default Home

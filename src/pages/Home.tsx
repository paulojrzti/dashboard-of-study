import {
  AvatarList,
  Header,
  CardComponent,
  CustomTable,
  CustomChart,
} from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>Action</button>,
      ],
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>Action</button>,
      ],
    ],
  }
  return (
    <>
      <Header></Header>
      <Container maxWidth="lg">
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['jan', 'fev', 'Mar']}
            data={[1000.12, 2456.54, 986.32, 654.89]}
            type={'bar'}
          ></CustomChart>
        </CardComponent>
      </Container>
    </>
  )
}
export default Home

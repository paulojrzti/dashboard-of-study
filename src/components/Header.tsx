import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Logo } from '@/components'
import { Avatar, Box, Container } from '@mui/material'
import { pxToRem } from '@/utils'

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.appBackground};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultFont};
  margin-bottom: ${pxToRem(37)};
  width: 100%;
`
export default function Header() {
  return (
    <StyledHeader>
      <Container maxWidth="lg">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            height: pxToRem(64),
          }}
        >
          <Link to={'/home'}>
            <Logo height={30} width={73} />
          </Link>
          <Link to={'/perfil'}>
            <Avatar
              alt="Dnc Avatar"
              src="/dnc-avatar.svg"
              sx={{ width: pxToRem(40), height: pxToRem(40) }}
            />
          </Link>
        </Box>
      </Container>
    </StyledHeader>
  )
}

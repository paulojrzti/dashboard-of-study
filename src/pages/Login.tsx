import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponet,
  StyledH1,
  StyledP,
  Logo,
} from '@/components'
import { pxToRem } from '@/utils'

function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBttom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Login</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>

              <FormComponet
                input={[
                  {
                    type: 'email',
                    placeholder: 'Email',
                  },
                  {
                    type: 'password',
                    placeholder: 'Senha',
                  },
                ]}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    children: 'Login',
                  },
                ]}
                message={{
                  msg: 'Sucesso',
                  type: 'success',
                }}
              ></FormComponet>
            </Container>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default Login

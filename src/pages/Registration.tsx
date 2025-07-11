import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponet,
  StyledH1,
  StyledP,
  StyledUl,
  Logo,
} from '@/components'
import { pxToRem } from '@/utils'

function Registration() {
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
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBttom: pxToRem(24) }}>
                <StyledH1>Faça seu cadastro</StyledH1>
                <StyledP>Primeiro, diga-nos quem você é </StyledP>
              </Box>
              <StyledUl>
                <li>Entre 8 e 16 caracteres;</li>
                <li>Pelo menos uma letra maiúscula;</li>
                <li>Pelo menos um caracter especial</li>
                <li>Pelo menos um numero</li>
              </StyledUl>
              <FormComponet
                input={[
                  {
                    type: 'text',
                    placeholder: 'Nome completo',
                  },
                  {
                    type: 'email',
                    placeholder: 'Email',
                  },
                  {
                    type: 'telefone',
                    placeholder: 'Telefone',
                  },
                ]}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    children: 'Próximo',
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
export default Registration

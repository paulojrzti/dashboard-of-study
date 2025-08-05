import type { ChangeEvent } from 'react'
import { useEffect } from 'react'

// Components
import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponet,
  StyledH1,
  StyledP,
  Logo,
} from '@/components'

// Hooks
import { useFormValidation, usePost } from '@/hooks'

// Utils
import { pxToRem } from '@/utils'

// Types
import type { MessageProps, loginData, loginPostData } from '@/types'

function Login() {
  const inputs = [
    {
      type: 'email',
      placeholder: 'Email',
    },
    {
      type: 'password',
      placeholder: 'Senha',
    },
  ]

  const { data, loading, error, postData } = usePost<loginData, loginPostData>(
    'login'
  )
  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  const HandleChange = (): MessageProps => {
    if (!error) return { msg: '', type: 'success' }
    switch (error) {
      case 401:
        return {
          msg: 'Email e/ou senha inválidos',
          type: 'error',
        }
      default:
        return {
          msg: 'Não foi possível realizar a operação. Entre em contato com nosso suporte.',
          type: 'error',
        }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      email: String(formValues[0]),
      password: String(formValues[1]),
    })
  }

  useEffect(() => {
    if (data?.jwt_token) {
      console.log('DATA:', data)
    }
  }, [data])

  return (
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
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <StyledH1>Login</StyledH1>
              <StyledP>Digite sua senha e email para logar</StyledP>
            </Box>

            <FormComponet
              input={inputs.map((inputProps, index) => ({
                type: inputProps.type,
                placeholder: inputProps.placeholder,
                value: formValues[index] || '',
                onChange: (e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, e.target.value),
              }))}
              buttons={[
                {
                  className: 'primary',
                  disabled: !formValid || loading,
                  onClick: handleSubmit,
                  type: 'submit',
                  children: loading ? 'Aguarde...' : 'Login',
                },
              ]}
              message={HandleChange()}
            />
          </Container>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login

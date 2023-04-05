import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 0px 30 px rgba(0, 0, 0, 0.8',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    fontWeight: 700,
    fontSize: '$lg',
    color: '$gray100',
    marginBottom: '2rem',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    flex: 1,
    overflow: 'auto',
  },
})

export const CartClose = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray500',
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
})

export const CartProduct = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
  height: '5.81rem',
})

export const CartProductImage = styled('div', {
  width: '6.31rem',
  height: '5.81rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const CartProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  p: {
    color: '$gray300',
    fontSize: '1.25rem',
  },

  strong: {
    marginTop: 4,
    fontSize: '1.25rem',
    fontWeight: 700,
  },

  button: {
    marginTop: 'auto',
    width: 'max-content',
    background: 'none',
    border: 'none',
    color: '$green500',
    fontSize: '1rem',
    fontWeight: 700,
  },
})

export const CartFinalization = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  button: {
    width: '100%',
    background: '$green500',
    color: '$white',
    fontSize: '1.125rem',
    height: '4.31rem',
    border: 'none',
    fontWeight: 700,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})

export const FinalizationDatails = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  marginBottom: 55,

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    p: {
      fontSize: '$md',
      color: '$gray300',
    },

    '&:last-child': {
      fontWeight: 'bold',

      span: {
        fontSize: '$md',
      },

      p: {
        color: '$gray100',
        fontSize: '$xl',
      },
    },
  },
})
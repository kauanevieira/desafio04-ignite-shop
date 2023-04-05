import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '::-webkit-scrollbar-track': {
    background: '$gray900',
  },

  '::-webkit-scrollbar-thumb': {
    background: '$green500',
    borderRadius: 10,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  a: {
    color: 'inherit',
  },

  button: {
    cursor: 'pointer',
  },
})

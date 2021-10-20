export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Line',
    values: [
      {
        name: 'Line',
        value: '#00c300',
      },
      {
        name: 'Amazon',
        value: '#ff9900',
      },
    ],
  },
}
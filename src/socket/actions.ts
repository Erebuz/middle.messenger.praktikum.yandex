const wsActions: { [key: string]: (...args: unknown[]) => void } = {
  pong: () => console.log('Pong'),
}

export default wsActions

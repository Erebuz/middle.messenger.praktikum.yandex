const wsActions: { [key: string]: (...args: any[]) => void } = {
  pong: () => console.log('Pong'),
}

export default wsActions

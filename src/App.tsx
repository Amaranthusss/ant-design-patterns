import Examples from './components/Examples/Examples'

const App = (): JSX.Element => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Examples />
    </div>
  )
}

export default App

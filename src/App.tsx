import { ConfigProvider } from 'antd'
import plPL from 'antd/lib/locale/pl_PL'
import moment from 'moment'
import 'moment/locale/pl'
import MainPage from './components/MainPage/MainPage'

moment.locale('pl')

const App = (): JSX.Element => {
  return (
    <ConfigProvider locale={plPL}>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MainPage />
      </div>
    </ConfigProvider>
  )
}

export default App

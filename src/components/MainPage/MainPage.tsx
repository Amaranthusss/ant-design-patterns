import { Col, Row } from 'antd'
import _ from 'lodash'

import InputExample from './InputExample/InputExample'
import ButtonExample from './ButtonExample/ButtonExample'
import TableExample from './TableExample/TableExample'

const MainPage = (): JSX.Element => {
  return (
    <div style={{ width: '100%' }}>
      <Row align={'middle'} justify={'center'}>
        <Col>
          <h1>Examples:</h1>
        </Col>
      </Row>

      <Row align={'middle'} justify={'center'}>
        <Col span={6}>
          <ButtonExample />
        </Col>
        <Col span={6}>
          <InputExample />
        </Col>
      </Row>

      <Row align={'middle'} justify={'center'}>
        <Col span={12}>
          <TableExample />
        </Col>
      </Row>
    </div>
  )
}

export default MainPage

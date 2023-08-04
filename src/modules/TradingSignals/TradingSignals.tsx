import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Panel from '../../common-components/MANGroup.Panel/MANGroup.Panel'
import TextUpdater from './components/TextUpdater/TextUpdater'
import SignalsGrid from './components/SignalsGrid/SignalsGrid'

const TradingSignals: React.FC = () => {
  return (
    <div data-testid="trading-signals-component">
      <Row className="mb-3 mt-3">
        <Col>
          <Panel title="Input And Button">
            <TextUpdater />
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Panel title="Grid With Data">
            <SignalsGrid />
          </Panel>
        </Col>
      </Row>
    </div>
  )
}

export default TradingSignals

import React from 'react'
import Utilitytable from '../Table/Utilitytable'
import { Card, Carousel } from 'antd'
import Barchart from '../Graph/Barchart'
import CostefTable from '../Table/CostefTable'

const UtilizationCarosel = () => {
  return (
    <Carousel fade={true} autoplay autoplaySpeed={15000} >
    <div>
      <Card title={<div className="custom-card-title">L1000</div>}>
        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <CostefTable />
        </Card.Grid>

        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <Barchart containername={'L1000barcontainer'} />
        </Card.Grid>

        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <Utilitytable />
        </Card.Grid>
      </Card>
    </div>

    <div>
      <Card title={<div className="custom-card-title">L1500</div>}>

        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <CostefTable />
        </Card.Grid>

        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <Barchart containername={'L1500barcontainer'} />
        </Card.Grid>

        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <Utilitytable />
        </Card.Grid>
      </Card>
    </div>

    <div>
      <Card title={<div className="custom-card-title">KOPFRA 3</div>}>
        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <CostefTable />
        </Card.Grid>

        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <Barchart containername={'KOPFRA3L1000barcontainer'} />
        </Card.Grid>

        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <Utilitytable />
        </Card.Grid>
      </Card>
    </div>

    <div>
      <Card title={<div className="custom-card-title">KOPFRA 4</div>}>
        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <CostefTable />
        </Card.Grid>

        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <Barchart containername={'KOPFRA4barcontainer'} />
        </Card.Grid>

        <Card.Grid style={{ width: '33%', textAlign: 'center', }}>
          <Utilitytable />
        </Card.Grid>
      </Card>
    </div>
  </Carousel>
  )
}

export default UtilizationCarosel
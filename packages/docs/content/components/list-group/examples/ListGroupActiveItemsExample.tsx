import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupActiveItemsExample = () => {
  return (
    <CListGroup>
      <CListGroupItem active>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Morbi leo risus</CListGroupItem>
      <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
  )
}

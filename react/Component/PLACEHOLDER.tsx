import React, { FunctionComponent } from 'react'
import * as S from './styled'

type OwnProps = {}

type Props = OwnProps

export const PLACEHOLDER: FunctionComponent<Props> = () => {
  return (
    <S.Container>
      <p>PLACEHOLDER</p>
    </S.Container>
  )
}

export default PLACEHOLDER

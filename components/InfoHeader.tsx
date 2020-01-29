import * as React from 'react'

type Props = {
  title?: string
}

const InfoHeader: React.FunctionComponent<Props> = ({
  children
}) => (
  <div>
    {children}
  </div>
)

export default InfoHeader

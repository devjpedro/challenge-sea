import { Typography } from 'antd'

import { ComingSoonContainer } from './styles'

export function ComingSoon({
  layout = 'dashboard',
}: {
  layout?: 'blank' | 'dashboard'
}) {
  return (
    <ComingSoonContainer layout={layout} align="center" justify="center">
      <Typography.Title level={2}>Em breve</Typography.Title>
    </ComingSoonContainer>
  )
}

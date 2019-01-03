import React from 'react'
import { Button } from '@elementary/components'
import theme from './theme'

export default props => (
  <Button
    {...props}
    borderRadius="5px"
    bg={theme.colors.black}
    color={theme.colors.white}
    height="40px"
    width="120px"
    textTransform="uppercase"
    py="11px"
    fontWeight="700"
  />
)

import React from 'react'
import { Link } from 'gatsby'
import { Flex, Text, Box } from '@elementary/components'
import { access } from '@elementary/proper'
import theme from './theme'

const Header = ({ siteTitle }) => (
  <Flex color={theme.colors.black} height="70px" alignItems="center" p="30px" justifyContent="space-between">
    <Text textTransform="uppercase" is="h1" f="24px" fontWeight="700">
      {siteTitle}
    </Text>
    <Box>
      <Text>Github</Text>
    </Box>
  </Flex>
)

export default Header

import React from 'react'
import { Link } from 'gatsby'
import { Flex, Text, Box } from '@elementary/components'
import { access } from '@elementary/proper'
import theme from './theme'

const Header = ({ siteTitle }) => (
  <Flex
    color={theme.colors.black}
    height="70px"
    alignItems="center"
    p="30px"
    justifyContent="space-between"
  >
    <Text
      textTransform="uppercase"
      is="h1"
      f="24px"
      fontWeight="700"
      is={Link}
      to="/"
      textDecoration="none"
      color={theme.colors.black}
    >
      {siteTitle}
    </Text>
    <Box>
      <Text
        is="a"
        mx="10px"
        textDecoration="none"
        color={theme.colors.black}
        href="https://github.com/rajatsharma/elementary"
        target="_blank"
      >
        Github
      </Text>
      <Text
        is={Link}
        textDecoration="none"
        color={theme.colors.black}
        to="/docs"
      >
        Docs
      </Text>
    </Box>
  </Flex>
)

export default Header

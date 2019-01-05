import React from 'react'
import { Flex, Text, Link } from '@elementary/components'
import theme from './theme'

export const OutLink = props => (
  <Link
    textTransform="uppercase"
    color="white"
    f="16px"
    textDecoration="none"
    hover={{ textDecoration: 'underline dotted ' + theme.colors.white }}
    {...props}
  />
)

export default _ => (
  <Flex
    justifyContent="space-between"
    mt="50px"
    bg={theme.colors.black}
    color={theme.colors.white}
    height="120px"
    alignItems="center"
    px="30px"
  >
    <Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p="10px"
      >
        <Text textTransform="uppercase" f="16px">
          MIT Licensed
        </Text>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p="10px"
      >
        <OutLink href="https://github.com/rajatsharma/elementary/issues">
          Report Issues
        </OutLink>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p="10px"
      >
        <OutLink href="https://github.com/rajatsharma/elementary">
          Github
        </OutLink>
      </Flex>
    </Flex>
    <Flex>© {new Date().getFullYear()} Rajat Sharma</Flex>
  </Flex>
)

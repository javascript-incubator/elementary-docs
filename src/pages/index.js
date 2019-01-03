import React from 'react'
import { Link } from 'gatsby'
import { Text, Flex } from '@elementary/components'
import Layout from '../components/layout'
import Button from '../components/Button'
import Prism from '../images/prism.png'
import Optometry from '../images/optometry.png'
import Lens from '../images/contact-lens.png'
import theme from '../components/theme'

const IndexPage = () => (
  <Layout>
    {/* Heading */}
    <Flex alignItems="center" justifyContent="center" h="500px" flexDirection="column">
      {/* <img src={Prism} height="70px" /> */}
      <Text f="72px" fontWeight="700" textTransform="uppercase" ml="10px" mb="20px">
        Elementary
      </Text>
      <Text color={theme.colors.light}>Ultracommon Components powered by Optimized Lenses</Text>
    </Flex>
    {/* Components */}
    <Flex justifyContent="space-between">
      <Flex justifyContent="center" alignItems="center" flexDirection="column" w="33%" p="10px">
        <img src={Prism} height="70px" />
        <Text textTransform="uppercase">Standard</Text>
        <Text color={theme.colors.light} textAlign="center">
          Precomposed Lenses so you can apply styles as props.
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" w="33%" p="10px">
        <img src={Optometry} height="70px" />
        <Text textTransform="uppercase">Components</Text>
        <Text color={theme.colors.light} textAlign="center">
          React Components you can use in your daily programmming
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexDirection="column" w="33%" p="10px">
        <img src={Lens} height="70px" />
        <Text textTransform="uppercase">Proper</Text>
        <Text color={theme.colors.light} textAlign="center">
          Functional Lenses powering Standard and Components
        </Text>
      </Flex>
    </Flex>
    {/* Docs */}
    <Flex justifyContent="center" alignItems="center" mt="100px">
      <Button w="200px">
        <Link to="/docs" style={{ textDecoration: 'none', color: theme.colors.white }}>
          Read Docs
        </Link>
      </Button>
    </Flex>
    {/* Components */}
    <Flex justifyContent="center" alignItems="center" mt="100px" flexDirection="column">
      <Text f="30px" textTransform="uppercase" fontWeight="700" mb="50px">
        Installation
      </Text>
      <code style={{ padding: '30px' }}>yarn add @elementary/components</code>
    </Flex>
    <Flex justifyContent="center" alignItems="center" mt="100px" flexDirection="column">
      <Text f="30px" textTransform="uppercase" fontWeight="700" mb="50px">
        Getting Started
      </Text>
      <code style={{ padding: '30px' }}>
        {`
      import { Text } from '@elementary/components'`}
        <br />
        <br />
        {`<Text fontSize="16px">A Simple Example</Text>
      `}
      </code>
    </Flex>
  </Layout>
)

export default IndexPage

import React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { Text, Flex, Grid, Column } from '@elementary/components'
import { propsWithCategory as props } from '@elementary/standard'
import { pick } from '@elementary/proper'
import propsDesc from '../../components/propDesc'

const name = 'Image'
const extraProps = []

export default _ => {
  const availableProps = pick(extraProps, props)
  return (
    <Layout>
      <Flex mt="50px" direction="column">
        <Text f="50px" mb="30px">
          {name}
        </Text>
        <Text f="25px" mb="30px">
          Usage
        </Text>
        <Flex direction="column" mb="30px">
          <Text is="code" bg="unset">
            {`import { ${name} } from '@elementary/components'`}
          </Text>
          {/* <Text is="code" bg="unset">
            {example}
          </Text> */}
        </Flex>
        <Text f="25px" mb="30px">
          Props
        </Text>
        <Flex direction="column">
          {Object.keys(availableProps).map(x => (
            <Column my="20px">
              <Text tt="uppercase" fontWeight="700">
                {x}
              </Text>
              <Grid gridTemplateColumns="1fr 1fr">
                {availableProps[x].map(x => (
                  <>
                    <Text is="code" bg="unset">
                      {x}
                    </Text>
                    <Text is="code" bg="unset">
                      {propsDesc[x]}
                    </Text>
                  </>
                ))}
              </Grid>
            </Column>
          ))}
        </Flex>
        <Text>
          Along with these props all Common Props are also valid for {name}
        </Text>
        <Link to="/docs/CommonProps">Common Props</Link>
      </Flex>
    </Layout>
  )
}

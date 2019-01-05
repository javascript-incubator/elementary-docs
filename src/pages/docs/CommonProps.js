import React from 'react'
import Layout from '../../components/layout'
import { propsWithCategory as props } from '@elementary/standard'
import { Grid, Text, Column } from '@elementary/components'
import { pick } from '@elementary/proper'

export default _ => {
  const availableProps = pick(
    [
      'space',
      'dimensions',
      'color',
      'borderRadius',
      'states',
      'transition',
      'border',
      'transform',
      'boxShadow',
    ],
    props
  )
  return (
    <Layout>
      {Object.keys(availableProps).map(x => (
        <Column my="20px">
          <Text tt="uppercase" fontWeight="700">
            {x}
          </Text>
          <Grid gridTemplateColumns="1fr 1fr 1fr">
            {availableProps[x].map(x => (
              <>
                <Text is="code" bg="unset">
                  {x}
                </Text>
              </>
            ))}
          </Grid>
        </Column>
      ))}
    </Layout>
  )
}

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Button from '../components/Button'
import { OutLink } from '../components/Footer'
import Prism from '../images/Prism.png'
import Optometry from '../images/optometry.png'

import {
  Grid,
  Flex,
  Text,
  Truncate,
  Image,
  Banner,
  Relative,
  Absolute,
} from '@elementary/components'
import theme from '../components/theme'

const Item = ({ C, name, linkName }) => (
  <Flex
    direction="column"
    p="10px"
    alignItems="center"
    transition="all 0.4s ease"
    style={{ cursor: 'pointer' }}
    onClick={_ => window.open('/docs/' + (linkName || name))}
    hover={{
      background: theme.colors.black,
      color: theme.colors.white + ' !important',
    }}
  >
    <Text fontWeight="700" tt="uppercase" m="20px">
      {name}
    </Text>
    {C}
  </Flex>
)

const FnItem = ({ C, name }) => (
  <Flex
    direction="column"
    alignItems="center"
    transition="all 0.4s ease"
    style={{ cursor: 'pointer' }}
    hover={{ background: theme.colors.black, color: theme.colors.white }}
  >
    <Text fontWeight="700" m="20px">
      {name}
    </Text>
    {C}
  </Flex>
)

const SecondPage = () => (
  <Layout>
    <Flex justifyContent="center" alignItems="center" mt="50px">
      <Text tt="uppercase" fontWeight="700">
        Components
      </Text>
    </Flex>
    <Grid
      gridTemplateRows="1fr 1fr 1fr"
      gridTemplateColumns="1fr 1fr 1fr"
      gridTemplateAreas="button text image"
      m="50px"
    >
      <Item C={<Button>Click Me!</Button>} name="Button" />
      <Item C={<Text>Elementary! My dear Watson</Text>} name="Text" />
      <Item
        C={<Truncate w="250px">I got 99 problems but that bitch</Truncate>}
        name="Truncate"
      />
      <Item C={<Image h="75px" src={Prism} />} name="Image" />
      <Item
        C={
          <OutLink
            color={theme.colors.black}
            href="https://github.com/rajatsharma/elementary"
          >
            Github
          </OutLink>
        }
        name="Link"
      />
      <Item
        C={
          <Banner
            w="150px"
            h="80px"
            color="white"
            backgroundImage="https://wallpaper-house.com/data/out/6/wallpaper2you_102892.png"
          >
            Batman
          </Banner>
        }
        name="Banner"
      />
      <Item
        C={
          <Flex justifyContent="space-between" w="100px">
            <Text>Yes</Text>
            <Text>No</Text>
          </Flex>
        }
        name="Flex"
      />
      <Item
        C={
          <Grid gridTemplateColumns="1fr 1fr" w="100px" justifyItems="center">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
          </Grid>
        }
        name="Grid"
      />
      <Item
        C={
          <Relative bg={theme.colors.black} w="100px" h="50px">
            <Absolute>
              <Text color={theme.colors.white}>White</Text>
            </Absolute>
          </Relative>
        }
        linkName="absolute"
        name="Absolute and Relative"
      />
    </Grid>
    <Flex justifyContent="center" alignItems="center" mt="50px">
      <Text tt="uppercase" fontWeight="700">
        Proper
      </Text>
    </Flex>
    <Grid
      gridTemplateRows="1fr 1fr 1fr"
      gridTemplateColumns="1fr 1fr 1fr"
      m="50px"
    >
      <FnItem
        C={
          <Text is="code" bg="unset">
            String -> Object -> Any
          </Text>
        }
        name="access"
      />
      <FnItem
        C={
          <Text is="code" bg="unset">
            [String] -> Object -> Object
          </Text>
        }
        name="pick"
      />
      <FnItem
        C={
          <Text is="code" bg="unset">
            Function -> Array | Object -> Array | Object
          </Text>
        }
        name="filter"
      />
      <FnItem
        C={
          <Text is="code" bg="unset">
            Function -> Array | Object -> Array | Object
          </Text>
        }
        name="map"
      />
      <FnItem
        C={
          <Text is="code" bg="unset">
            [String] -> Object -> Object
          </Text>
        }
        name="omit"
      />
      <FnItem
        C={
          <Text is="code" bg="unset">
            Number -> Number -> [Number]
          </Text>
        }
        name="range"
      />
      <FnItem
        C={
          <Text is="code" bg="unset">
            Object | Array -> Object | Array -> Object | Array
          </Text>
        }
        name="concat"
      />
      <FnItem
        C={
          <Text is="code" bg="unset">
            {`map :: Function -> Maybe -> Maybe`}
            <br />
            {`get :: Any`}
          </Text>
        }
        name="Maybe"
      />
      <FnItem
        C={
          <Text is="code" bg="unset">
            String -> Object -> Maybe
          </Text>
        }
        name="accessRaw"
      />
    </Grid>
  </Layout>
)

export default SecondPage

import * as React from "react"
import {
  ChakraProvider,
  Box,
  Card, CardHeader, CardBody, CardFooter,
  Heading,
  Stack,
  StackDivider,
  Text,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

import { Accordioncard } from "./components/Accordioncard"
import { datajs } from "./datafiles/datajs"
import {datanpm } from "./datafiles/datanpm"

export const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <Accordioncard
        cardTitle='読めるようになるためのJS基礎'
        dataList={datajs}
      />
      <Accordioncard
        cardTitle='書けるようになるとよいnpm基礎'
        dataList={datanpm}
      />
    </ChakraProvider>
  )
}

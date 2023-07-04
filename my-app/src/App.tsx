import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"

import { Accordioncard } from "./components/Accordioncard"
import { datajs } from "./datafiles/datajs"
import {datanpm } from "./datafiles/datanpm"

export const App = () => {

  return (
    <ChakraProvider>
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

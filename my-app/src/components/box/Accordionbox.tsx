import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ChakraProvider,
  Box,
  Button,
  Collapse,
  Text,
  Link,
  VStack,
  Stack,
  HStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"

import { Accordionelem } from "./items/Accordionelem"

type AccordionboxProps = {
    dataList: string[][];
}

const Accordionbox: React.VFC<AccordionboxProps> = (props) => {
    const { dataList } = props;
    return (
        <Box>
            <Accordion allowMultiple>
                {dataList.map(elem => {
                    return (
                        <Accordionelem
                            title={elem[0]}
                            text={elem[1]}
                        />
                    )
                })}
            </Accordion>
        </Box>
    )
}

export { Accordionbox }
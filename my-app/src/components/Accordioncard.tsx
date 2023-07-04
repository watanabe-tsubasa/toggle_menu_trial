import * as React from "react"
import {
  Box,
  Card, CardHeader, CardBody,
  Heading,
} from "@chakra-ui/react"
import { Accordionbox } from "./box/Accordionbox"

type AccordioncardProps = {
  cardTitle: string;
  dataList: string[][];
}

const Accordioncard: React.FC<AccordioncardProps> = (props) => {
  
  const { cardTitle, dataList } = props;
  
  return (
    <Box>
      <Card padding={2} margin={4} bg='gray.50'>
        <CardHeader>
          <Heading size='md'>{cardTitle}</Heading>
        </CardHeader>
        <CardBody>
          <Accordionbox
            dataList={dataList}
          />
        </CardBody>
      </Card>
    </Box>
  )
}

export { Accordioncard }
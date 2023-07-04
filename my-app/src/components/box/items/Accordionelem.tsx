import * as React from "react"
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text
} from "@chakra-ui/react"

type AccordionelemProps = {
  title: string;
  text: string;
}

const Accordionelem: React.FC<AccordionelemProps> = (props) => {

  const { title, text } = props;

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            <Heading size='md'>
              {title}
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
    <AccordionPanel pb={4} marginLeft={4}>
      <Text pt='2' fontSize='sm'>
        {text}
      </Text>
    </AccordionPanel>
    </AccordionItem>
  )
}

export { Accordionelem };
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CalendarIcon, AddIcon } from "@chakra-ui/icons";

export const CreateSlidoButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        size={"md"}
        // p={3}
        leftIcon={<AddIcon />}
        colorScheme="teal"
        variant="solid"
        onClick={onOpen}
      >
        Create Slido
      </Button>

      {/* <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>When do you want to use this Slido?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              // h="200px"
              // templateRows="repeat(2, 1fr)"
              // templateColumns="repeat(5, 1fr)"
              gap={4}
            >
              {/* <GridItem rowSpan={2} colSpan={1} bg="tomato" /> */}
              <GridItem colSpan={2} bg="">
                <FormControl>
                  <FormLabel>Start date</FormLabel>
                  <Input type="date" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2} bg="">
                <FormControl>
                  <FormLabel>End date</FormLabel>
                  <Input type="date" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={4} bg="">
                <FormControl>
                  <FormLabel>Give your Slido a name</FormLabel>
                  {/* 初期フォーカスを与える場合 */}
                  {/* <Input ref={initialRef} placeholder="Slido name" /> */}
                  <Input placeholder="Slido name" />
                </FormControl>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button size={"sm"} p={5} onClick={onClose} mr={3} variant="ghost">
              Cancel
            </Button>
            <Button size={"sm"} p={5} colorScheme="teal">
              Create Slido
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

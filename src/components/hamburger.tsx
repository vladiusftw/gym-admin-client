import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Turn } from "hamburger-react";
import Link from "next/link";

type Props = {};

const Hamburger = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box display={{ base: "block", lg: "none" }}>
      <Turn
        hideOutline={false}
        label="hamburger menu"
        size={32}
        toggled={isOpen}
        toggle={setIsOpen}
        direction="right"
      />
      <Box
        pos={"absolute"}
        bgColor={"black"}
        px={[24]}
        py={[8]}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={5}
        display={isOpen ? "block" : "none"}
        color={"white"}
      >
        <VStack spacing={[4]}>
          <Link href={"/"}>
            <Text size={"md"}>Clients</Text>
          </Link>
          <Link href={"/classes"}>
            <Text size={"md"}>Classes</Text>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default Hamburger;

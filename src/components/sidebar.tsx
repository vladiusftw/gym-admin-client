import { Box, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <Box
      bgColor={"white"}
      display={{ base: "none", lg: "flex" }}
      flexDir={"column"}
      maxH={"100vh"}
      flex={0.2}
      alignItems={"center"}
    >
      <VStack mt={[8]} spacing={[4]}>
        <Link href={"/"}>
          <Text size={"md"}>Clients</Text>
        </Link>
        <Link href={"classes"}>
          <Text size={"md"}>Classes</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;

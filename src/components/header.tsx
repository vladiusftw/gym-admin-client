import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      mt={{ base: 4, lg: 0 }}
    >
      <Image
        src={"/logo.png"}
        width={150}
        height={150}
        alt={""}
        style={{ borderRadius: 5 }}
      />
      <Image
        src={"/pfp.jpg"}
        width={70}
        height={70}
        alt={""}
        style={{ borderRadius: 50, height: "100%" }}
      />
    </Box>
  );
};

export default Header;

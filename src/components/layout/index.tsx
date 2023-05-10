import { Box, Text } from "@chakra-ui/react";
import Hamburger from "../hamburger";

import Header from "../header";
import Sidebar from "../sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <Box display={"flex"} flexDir={"row"} h={"100%"} overflowY={"hidden"}>
    <Sidebar />
    <Box as="main" flex={{ base: 1, lg: 0.8 }} maxH={"100vh"}>
      <Box h={"100vh"} bgColor={"#F5F4F7"} px={[10]} pt={[4]}>
        <Hamburger />
        <Header />
        {children}
      </Box>
    </Box>
  </Box>
);

export default Layout;

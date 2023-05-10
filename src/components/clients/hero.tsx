import {
  Box,
  Button,
  Container,
  HStack,
  Table,
  TableContainer,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AddIcon, EditIcon, MinusIcon } from "@chakra-ui/icons";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const getClients = async () => {
    try {
      const fetchData = await axios.get(
        "https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients"
      );
      setData(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClient = (id: number) => {
    axios
      .delete(
        `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${id}`
      )
      .then((res) => {
        console.log(res);
      });
    const temp = data;
    temp.splice(
      temp.findIndex((a: any) => a.id == id),
      1
    );
    setData([...temp]);
  };

  useEffect(() => {
    getClients();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Box mt={[6, null, 8]}>
      <Link href={{ pathname: "/clientsDetail", query: { type: "add" } }}>
        <Button
          variant={"ghost"}
          bgColor={"black"}
          color={"white"}
          mb={[4]}
          _hover={{
            bgColor: "white",
            color: "black",
            border: "1px solid black",
          }}
        >
          Add Client
        </Button>
      </Link>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>
                {" "}
                <Text size={"xs"}>Name</Text>
              </Th>
              <Th>
                <Text size={"xs"}>Phone Number</Text>
              </Th>
              <Th>
                <Text size={"xs"}>Address</Text>
              </Th>
              <Th>
                <Text size={"xs"}>Type</Text>
              </Th>
              <Th>
                <Text size={"xs"}>Actions</Text>
              </Th>
            </Tr>
          </Thead>

          {data
            .slice((currPage - 1) * 3, currPage * 3)
            .map((item: any, index: number) => {
              return (
                <Tr>
                  <Td>
                    <Text size={"xs"}>
                      {item?.full_name ? item?.full_name : "N/A"}
                    </Text>
                  </Td>
                  <Td>
                    <Text size={"xs"}>
                      {item?.mobile_number ? item?.mobile_number : "N/A"}
                    </Text>
                  </Td>
                  <Td>
                    <Text size={"xs"}>
                      {item?.address ? item?.address : "N/A"}
                    </Text>
                  </Td>
                  <Td>
                    <Text size={"xs"}>
                      {item?.subscription_plan
                        ? item?.subscription_plan
                        : "N/A"}
                    </Text>
                  </Td>
                  <Td>
                    <HStack>
                      <Link
                        href={{
                          pathname: "/clientsDetail",
                          query: { ...item, type: "modify" },
                        }}
                      >
                        <EditIcon />
                      </Link>

                      <MinusIcon
                        onClick={() => deleteClient(item.id)}
                        cursor={"pointer"}
                      />
                    </HStack>
                  </Td>
                </Tr>
              );
            })}
        </Table>
      </TableContainer>
      <HStack justifyContent={"center"} w={"100%"}>
        {data
          .slice(0, Math.ceil(data.length / 3))
          .map((item, index: number) => {
            return (
              <Button onClick={() => setCurrPage(index + 1)}>
                {index + 1}
              </Button>
            );
          })}
      </HStack>
    </Box>
  );
};

export default Hero;

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
import { QuestionOutlineIcon, EditIcon, MinusIcon } from "@chakra-ui/icons";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const getClasses = async () => {
    try {
      const fetchData = await axios.get(
        "https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes"
      );
      setData(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClass = (id: number) => {
    axios
      .delete(
        `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${id}`
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
    getClasses();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Box mt={[6, null, 8]}>
      <Link href={{ pathname: "/classesDetail", query: { type: "add" } }}>
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
          Add Class
        </Button>
      </Link>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>
                {" "}
                <Text size={"xs"}>Class Title</Text>
              </Th>
              <Th>
                <Text size={"xs"}>Coach Name</Text>
              </Th>
              <Th>
                <Text size={"xs"}>Timing</Text>
              </Th>
              <Th>
                <Text size={"xs"}>Price</Text>
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
                    <Text size={"xs"}>{item?.title ? item?.title : "N/A"}</Text>
                  </Td>
                  <Td>
                    <Text size={"xs"}>
                      {item?.coach_name ? item?.coach_name : "N/A"}
                    </Text>
                  </Td>
                  <Td>
                    <Text size={"xs"}>
                      {item?.timing ? item?.timing : "N/A"}
                    </Text>
                  </Td>
                  <Td>
                    <Text size={"xs"}>{item?.price ? item?.price : "N/A"}</Text>
                  </Td>
                  <Td>
                    <HStack spacing={[2]}>
                      <Link
                        href={{
                          pathname: "/classesDetail",
                          query: { ...item, type: "modify" },
                        }}
                      >
                        <EditIcon w={5} h={5} />
                      </Link>

                      <MinusIcon
                        w={5}
                        h={5}
                        onClick={() => deleteClass(item.id)}
                        cursor={"pointer"}
                      />
                      <Link href={{ pathname: "/classesPreview", query: item }}>
                        <QuestionOutlineIcon w={5} h={5} />
                      </Link>
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

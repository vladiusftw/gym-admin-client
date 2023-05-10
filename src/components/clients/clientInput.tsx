import {
  Button,
  HStack,
  Input,
  Table,
  TableContainer,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import axios from "axios";

type Props = {};

const ClientInput = ({ type }: { type: any }) => {
  const toast = useToast();
  const router = useRouter();
  const data = router.query;
  const nameRef = useRef<any>();
  const phoneRef = useRef<any>();
  const addressRef = useRef<any>();
  const typeRef = useRef<any>();
  const modifyData = async () => {
    var item = {};
    if (nameRef?.current?.value != "")
      item = { ...item, full_name: nameRef?.current?.value };
    if (phoneRef?.current?.value != "")
      item = { ...item, mobile_number: phoneRef?.current?.value };
    if (addressRef?.current?.value != "")
      item = { ...item, address: addressRef?.current?.value };
    if (typeRef?.current?.value != "")
      item = { ...item, subscription_plan: typeRef?.current?.value };
    await axios
      .put(
        `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${data?.id}`,
        item
      )
      .then((res) => {
        toast({
          title: "Client Modified!",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        router.push("/");
      })
      .catch((e) => console.log(e));
  };

  const addClient = async () => {
    if (nameRef?.current?.value == "") {
      toast({
        title: "Invalid name",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (phoneRef?.current?.value == "") {
      toast({
        title: "Invalid phone number",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (addressRef?.current?.value == "") {
      toast({
        title: "Invalid address",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (typeRef?.current?.value == "") {
      toast({
        title: "Invalid type",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    await axios
      .post("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients", {
        full_name: nameRef?.current?.value,
        mobile_number: phoneRef?.current?.value,
        address: addressRef?.current?.value,
        subscription_plan: typeRef?.current?.value,
      })
      .then((res) => {
        toast({
          title: "Client Added!",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        router.push("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <VStack alignItems={"start"} mt={[4]}>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Name
        </Text>
        <Input
          ref={nameRef}
          placeholder={`${data?.full_name ? data?.full_name : "John..."}`}
          _placeholder={{ color: "grey" }}
          size={"md"}
        />
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Phone Number
        </Text>
        <Input
          ref={phoneRef}
          placeholder={`${
            data?.mobile_number ? data?.mobile_number : "050-1234567..."
          }`}
          _placeholder={{ color: "grey" }}
          size={"md"}
        />
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Address
        </Text>
        <Input
          ref={addressRef}
          placeholder={`${data?.address ? data?.address : "Dubai..."}`}
          _placeholder={{ color: "grey" }}
          size={"md"}
        />
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Type
        </Text>
        <Input
          ref={typeRef}
          placeholder={`${
            data?.subscription_plan ? data?.subscription_plan : "Basic Plan..."
          }`}
          _placeholder={{ color: "grey" }}
          size={"md"}
        />
      </HStack>
      <Button
        alignSelf={"center"}
        bgColor={"black"}
        variant={"ghost"}
        color={"white"}
        _hover={{
          bgColor: "transparent",
          color: "black",
          border: "1px solid black",
        }}
        onClick={type == "modify" ? modifyData : addClient}
      >
        {type == "modify" ? "Modify" : "Add"}
      </Button>
    </VStack>
  );
};

export default ClientInput;

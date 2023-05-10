import {
  Button,
  HStack,
  Input,
  Table,
  TableContainer,
  Td,
  Text,
  Textarea,
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

const ClassInput = ({ type }: { type: any }) => {
  const toast = useToast();
  const router = useRouter();
  const data = router.query;
  const titleRef = useRef<any>();
  const nameRef = useRef<any>();
  const descRef = useRef<any>();
  const briefRef = useRef<any>();
  const timingRef = useRef<any>();
  const priceRef = useRef<any>();
  const modifyData = async () => {
    var item = {};
    if (titleRef?.current?.value != "")
      item = { ...item, title: titleRef?.current?.value };
    if (nameRef?.current?.value != "")
      item = { ...item, coach_name: nameRef?.current?.value };
    if (descRef?.current?.value != "")
      item = { ...item, description: descRef?.current?.value };
    if (briefRef?.current?.value != "")
      item = { ...item, coach_brief: briefRef?.current?.value };
    if (timingRef?.current?.value != "")
      item = { ...item, timing: timingRef?.current?.value };
    if (priceRef?.current?.value != "")
      item = { ...item, price: priceRef?.current?.value };
    await axios
      .put(
        `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${data?.id}`,
        item
      )
      .then((res) => {
        toast({
          title: "Class Modified!",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        router.push("/classes");
      })
      .catch((e) => console.log(e));
  };

  const addClass = async () => {
    if (titleRef?.current?.value == "") {
      toast({
        title: "Invalid title",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (nameRef?.current?.value == "") {
      toast({
        title: "Invalid name",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (descRef?.current?.value == "") {
      toast({
        title: "Invalid description",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (briefRef?.current?.value == "") {
      toast({
        title: "Invalid brief",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (timingRef?.current?.value == "") {
      toast({
        title: "Invalid timing",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (priceRef?.current?.value == "") {
      toast({
        title: "Invalid price",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    await axios
      .post("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes", {
        title: titleRef?.current?.value,
        coach_name: nameRef?.current?.value,
        description: descRef?.current.value,
        coach_brief: briefRef?.current.value,
        timing: timingRef?.current?.value,
        price: priceRef?.current?.value,
      })
      .then((res) => {
        toast({
          title: "Class Added!",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        router.push("/classes");
      })
      .catch((e) => console.log(e));
  };

  return (
    <VStack alignItems={"start"} mt={[4]}>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Class Title
        </Text>
        <Input
          ref={titleRef}
          placeholder={`${data?.title ? data?.title : "test..."}`}
          _placeholder={{ color: "grey" }}
          size={"md"}
        />
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Coach Name
        </Text>
        <Input
          ref={nameRef}
          placeholder={`${data?.coach_name ? data?.coach_name : "ichigo..."}`}
          _placeholder={{ color: "grey" }}
          size={"md"}
        />
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Coach Description
        </Text>
        <Textarea
          ref={nameRef}
          placeholder={`${data?.description ? data?.description : "ichigo..."}`}
          _placeholder={{ color: "grey" }}
          size={"md"}
        />
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Coach Brief
        </Text>
        <Input
          ref={nameRef}
          placeholder={`${data?.coach_brief ? data?.coach_brief : "ichigo..."}`}
          _placeholder={{ color: "grey" }}
          size={"md"}
        />
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Timing
        </Text>
        <Input
          ref={timingRef}
          placeholder={`${data?.timing ? data?.timing : "wano..."}`}
          _placeholder={{ color: "grey" }}
          size={"md"}
        />
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} w={"20%"}>
          Pricing
        </Text>
        <Input
          ref={priceRef}
          placeholder={`${data?.price ? data?.price : "20..."}`}
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
        onClick={type == "modify" ? modifyData : addClass}
      >
        {type == "modify" ? "Modify" : "Add"}
      </Button>
    </VStack>
  );
};

export default ClassInput;

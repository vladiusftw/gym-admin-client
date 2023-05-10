import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Preview = (props: Props) => {
  const router = useRouter();
  const data = router.query;

  return (
    <VStack alignItems={"start"} mt={[4]}>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} flex={0.2}>
          Class Title
        </Text>
        <Text size={"md"} flex={0.8}>
          {data?.title}
        </Text>
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} flex={0.2}>
          Class Description
        </Text>
        <Text size={"md"} flex={0.8}>
          {data?.description}
        </Text>
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} flex={0.2}>
          Coach Name
        </Text>
        <Text size={"md"} flex={0.8}>
          {data?.coach_name}
        </Text>
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} flex={0.2}>
          Coach Brief
        </Text>
        <Text size={"md"} flex={0.8}>
          {data?.coach_brief}
        </Text>
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} flex={0.2}>
          Timing
        </Text>
        <Text size={"md"} flex={0.8}>
          {data?.timing}
        </Text>
      </HStack>
      <HStack spacing={[4]} justifyContent={"space-between"} w={"100%"}>
        <Text size={"md"} flex={0.2}>
          Pricing
        </Text>
        <Text size={"md"} flex={0.8}>
          {data?.price}
        </Text>
      </HStack>
    </VStack>
  );
};

export default Preview;

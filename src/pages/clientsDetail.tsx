import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import ClientInput from "../components/clients/clientInput";

type Props = {};

const ClientsDetail = () => {
  const router = useRouter();
  const data = router.query;
  return <ClientInput type={data?.type} />;
};

export default ClientsDetail;

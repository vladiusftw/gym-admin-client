import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import ClassInput from "../components/classes/classInput";

type Props = {};

const ClassesDetail = () => {
  const router = useRouter();
  const data = router.query;
  return <ClassInput type={data?.type} />;
};

export default ClassesDetail;

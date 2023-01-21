import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Button from "../../../components/Button";
import Link from "next/link";
import Alert from "../../../components/Alert";
import TextInput from "../../../components/TextInput";


export default function index() {
  const router = useRouter();
  const { pasangan } = router.query;
  const [statePasangan, setStatePasangan] = useState<string>("");
  const [tamu, setTamu] = useState<string>("");

  const handleOnClick = () => {
    let convertTamu = tamu.replace(" ", "%20");

    if (tamu) {
      let tamuId = convertTamu;
      Router.push({ pathname: `/invitation/${pasangan}/${tamuId}` });
    } else {
    }
  };

  return (
    <div className="flex flex-1 flex-col md:grid   md:grid-flow-row-dense  bg-gray-300 min-w-screen min-h-screen justify-items-center ">
      <div className="flex flex-1 flex-col  px-6 md  bg-white sm:min-h-screen  lg:h-1/4 lg:w-1/2 self-center justify-items-center ">
        <div className={`flex  flex-1 lg:w-1/2 self-end justify-self-end  m-auto`}>
          <h2 className="text-4xl text-appPrimary-blue text-center self-end mb-7 mx-auto ">
            {pasangan?.toLocaleString().replace("&", " & ").toUpperCase()}
          </h2>
        </div>
        <div className="flex lg:m-auto flex-1 flex-col md:px-29 lg:w-2/4 md:h-full">
          <TextInput
            title="Masukan Nama Tamu"
            placeholder="Contoh shabran msm"
            value={tamu}
            onChange={(event) => setTamu(event.target.value)}
          />
          <Button
            isRound
            typeButton="Primary"
            backgroundColor="blue"
            title="next"
            type="submit"
            onClick={() => handleOnClick()}
          />
        </div>
      </div>
    </div>
  );
}


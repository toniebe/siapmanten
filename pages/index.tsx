import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import Link from "next/link";
import { useState } from "react";
import TextInput from "../components/TextInput";
import Alert from "../components/Alert";
import Router from "next/router";

export default function Home() {
  const [pria, setPria] = useState<string>("");
  const [wanita, setWanita] = useState<string>("");
  const [warn, setWarn] = useState<boolean>(false);
  const [idPenganten, setIdPenganten] = useState<string>("");

  const handleOnClick = () => {
    setWarn(false);
    let convertMale = pria.replace(" ", "%20");
    let converFemale = wanita.replace(" ", "%20");
    if (pria && wanita) {
      // let randomNumber = Math.floor(Math.random() * 11);
      let newPengantenId = convertMale + "&" + converFemale;
      setIdPenganten(newPengantenId);
      Router.push({ pathname: `/invitation/${newPengantenId}` });
    } else {
      setWarn(true);
    }
  };

  return (
    // <div className="grid px-6  grid-flow-row-dense  bg-white min-w-screen min-h-screen lg:justify-items-center ">
    <div className="grid px-6  grid-flow-row-dense  bg-white min-w-screen min-h-screen lg:justify-items-center ">
      <div
        className={`grid md:auto-cols-max lg:w-1/2 lg:pl-7  md:row-start-1 self-center `}
      >
        <img
          src={'/img/SiapManten.png'}
          alt={'siap manten logo'}
          className="h-full md:w-full lg:w-3/4  object-contain object-center"
        />
        {warn ? (
          <Alert
            title="Maaf tidak dapat diproses"
            description="masukan nama pengantin pria dan wanita"
          />
        ) : null}
      </div>
      <div className=" px-29 lg:w-1/2 grid row-start-2 md:auto-cols-maxs">
        <TextInput
          title="Nama Penganten Pria"
          placeholder="Contoh abdul"
          value={pria}
          onChange={(event) => setPria(event.target.value)}
        />
        <TextInput
          title="Nama Penganten Wanita"
          placeholder="Contoh lisa"
          value={wanita}
          onChange={(event) => setWanita(event.target.value)}
        />
        <Button
          isRound
          backgroundColor='bg-mantenp-blue'
          hoverColor='bg-blue-100'
          title="next"
          type="submit"
          onClick={() => handleOnClick()}
        />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import Link from "next/link";

export default function index() {
  const router = useRouter();
  const { pasangan } = router.query;
  const [statePasangan, setStatePasangan] = useState<string>("");
  const [tamu, setTamu] = useState<string>("");
  const [linkTamu, setLink] = useState<string>("");
  const [messageWa, setMessageWa] = useState<string>("");
  let penganten: any;

  const handleOnClick = () => {
    let convertTamu = tamu.replace(" ", "%20");
    let convertPasangan = pasangan?.toLocaleString().replaceAll(" ", "%20");
    penganten = pasangan?.toLocaleString().split("&")
    let pria = penganten[0].replaceAll(" ","%20")
    let wanita = penganten[1].replaceAll(" ","%20")
    let wa = `
    https://wa.me/?text=Assalamu'alaikum Wr. Wb%0ABismillahirahmanirrahim.%0A%0AYth. ${convertTamu}%0A%0ATanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami : %0A%0A${pria + '%26%20' + wanita}%0A%0ABerikut link undangan kami untuk info lengkap dari acara bisa kunjungi : %0A %0Ahttp://localhost:3000/invitation/${convertPasangan?.replace("&","%26")}/${convertTamu}%0A%0AMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.%0A%0AMohon maaf perihal undangan hanya di bagikan melalui pesan ini. Karena suasana masih pandemi diharapkan untuk menggunakan masker dan datang pada jam yang telah ditentukan. Terima kasih banyak atas perhatiannya.%0A%0AWassalamu'alaikum Wr. Wb.%0ATerima Kasih.
    `;
    if (tamu) {
      let tamuId = convertTamu;
      setLink(
        `http://localhost:3000/invitation/${convertPasangan}/${convertTamu}`
      );
      setMessageWa(wa);
      // Router.push({ pathname: `/invitation/${pasangan}/${tamuId}` });
    } else {
    }
  };

  return (
    <div className="sm:p-0 lg:p-6 h-screen bg-gray-300 max-w-screen min-w-md flex justify-center md:items-center">
      <div className="px-6 pt-12 sm:w-screen md:w-screen lg:h-full lg:w-3/4  bg-white border border-gray-200 rounded-lg flex flex-col  md:items-center shadow  ">
        <h2 className="text-4xl font-['hammer'] text-mantenp-blue uppercase text-center  mb-7 mx-auto ">
          {pasangan?.toLocaleString().replace("&", " & ")}
        </h2>
        <div className="lg:w-1/2 md:w-full grid self-center">
          <TextInput
            title="Masukan Nama Tamu"
            placeholder="Contoh shabran msm"
            value={tamu}
            onChange={(event) => setTamu(event.target.value)}
          />
          <Button
            isRound={false}
            backgroundColor={"bg-blue-700"}
            hoverColor={"bg-blue-100"}
            title="Buat Link Undangan"
            type="submit"
            onClick={() => handleOnClick()}
          />

          {linkTamu ? (
            <>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

              <TextInput value={linkTamu} disabled />
              <div className="md:flex">
                <div className=" md:w-1/2 md:pr-2">
                  <Button
                    isRound={false}
                    backgroundColor={"bg-mantens-blue"}
                    hoverColor={"bg-blue-300"}
                    title="copy link"
                    type="submit"
                    size="large"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 stroke-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                      </svg>
                    }
                  />
                </div>
                <div className=" md:w-1/2 md:pl-2">
                  <Link href={linkTamu} target="_blank">
                    <Button
                      isRound={false}
                      backgroundColor={"bg-mantens-blue"}
                      hoverColor={"bg-blue-300"}
                      title="test link"
                      type="submit"
                      size="large"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 stroke-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      }
                    />
                  </Link>
                </div>
              </div>
              <Link href={messageWa} target="_blank">
                <Button
                  isRound={false}
                  backgroundColor={"bg-mantens-green"}
                  hoverColor="bg-green-700"
                  title="kirim ke whatsapp"
                  type="submit"
                  size="large"
                  icon={
                    <svg
                      className="w-6 h-6 text-green-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                    </svg>
                  }
                />
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import React, { useState } from "react";

interface propUndangan{
  tamu: string,
  pasangan: string,
}


export default function tamu(props: propUndangan) {
  const router = useRouter();
  const { pasangan,tamu } = router.query;
  // const {tamu,pasangan} = props
  return (
    <div>
      <p>{tamu}</p>
      <p>{pasangan}</p>
    </div>
  );
}

// export async function getStaticPaths({ params: { tamu, pasangan } }) {
//   // Add logic to fetch a single product based on `category_slug` and/or `product_slug`

//   return {
//     paths: [
//       // For each category/product combination you would have an entry like the following:
//       `/${pasangan}/${tamu}`,
//       {
//           params: {
//               tamu: tamu,
//               pasangan: pasangan,
//           }
//       }
//   ],
//   fallback: false
//   };
// }

// export async function getStaticProps({ params: { pasangan,tamu } }) {
//   // Add logic to fetch a single product based on `category_slug` and/or `product_slug`

//   return {
//       props: {
//           pasangan,
//           tamu
//       }
//   };
// }
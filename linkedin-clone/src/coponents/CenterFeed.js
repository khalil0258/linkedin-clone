import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase";
import Input from "./Input";
import Posts from "./Posts";
export default function CenterFeed() {
  const [post, setPost] = useState();
  useEffect(() => {
    const fetch = async () => {
      const pDocs = [];
      const snapshot = await getDocs(collection(db, "posts"));
      //   console.log(snapshot.docs[0].data());
      snapshot.forEach((doc) => {
        pDocs.push({ id: doc.id, data: doc.data() });
      });
      return pDocs;
    };
    fetch().then((res) => {
      //   console.log(res);
      setPost(res);
    });
    // console.log(post);
  }, [getDocs]);
  return (
    <CenterContainer>
      <Input />
      <hr className=" mt-5 color-black " />
      {post?.map((doc) => (
        <Posts key={doc.id} post={doc.data.post} time={doc.data.time} />
      ))}
    </CenterContainer>
  );
}

const CenterContainer = styled.div`
  flex: 0.6;
  @media (max-width: 768px) {
    flex: 1;
  }
`;

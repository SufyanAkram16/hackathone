import { useState } from "react";
import { auth, createUserWithEmailAndPassword, db } from "Firebase/firebase.config";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { doSignup } from "Store/authSlice";
import { Box, Toast, useToast } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";

export default function useSignup() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const dispatch = useDispatch();

  const onSubmitHandler = async () => {
    try {
      setLoader(true);
      // await createUserWithEmailAndPassword(auth, email, password)
      dispatch(
        doSignup({
          email,
          password,
        })
      );

      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={3} bg="green">
            Account Created Successfully ! 
          </Box>
        ),
      });
      router.push("/signin");
    } catch (e) {
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={3} bg="red">
           {e}
          </Box>
        ),
      });
      console.log(e);
    } finally {
      setLoader(false);
    }
  };

  return {
    userName,
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setUserName,
    setPassword,
    onSubmitHandler,
  };
}

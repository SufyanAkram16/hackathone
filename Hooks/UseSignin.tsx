import { useState, useEffect } from "react";
import { auth, signInWithEmailAndPassword } from "Firebase/firebase.config";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { doSignin } from "Store/authSlice";
import { Box, Toast, useToast } from "@chakra-ui/react";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();
  const auth = useSelector((store)=> store.auth)

  useEffect(()=>{
    if (auth.isLoggedIn) {
      router.push("/");
    }
  },[auth])

  const onSubmitHandler = async () => {
    try {
      setLoader(true);

      dispatch(
        doSignin({
          email,
          password,
        })
      );

    //   await signInWithEmailAndPassword(auth, email, password)
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={3} bg="green">
            Login Successfuly! 
          </Box>
        ),
      });
      router.push("/");
    } catch (e) {
        toast({
            position: "bottom-left",
            render: () => (
              <Box color="white" p={3} bg="red">
                {e}
              </Box>
            ),
          });
      console.log("====================================");
      console.log(e);
      console.log("====================================");
    } finally {
      setLoader(false);
    }
  };

  return {
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setPassword,
    onSubmitHandler,
  };
}
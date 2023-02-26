import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Section1() {
  const router = useRouter();

  const onclickSignup = () => {
    router.push("/signup")
  }
  const onclickSignin = () => {
    router.push("/signin")
  }
  
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Welcome
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              to Event Planning App!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            With our app, you can easily create and manage events, from start to
            finish. Set up guest lists, create invitations, and track RSVPs all
            in one place. Need help finding a venue or catering? Our app has a
            directory of trusted vendors that you can browse and book directly.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
              onClick={onclickSignup}
            >
              Sign Up
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} onClick={onclickSignin}>
              Login
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"500px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Play Button"}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              size={"lg"}
              color={"white"}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
              transform={"translateX(-50%) translateY(-50%)"}
            />
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"./event1.jpg"}
            />
          </Box>
        </Flex>
      </Stack>
      <Center>
        <Heading as={"span"} color={"red.400"}>
          Events
        </Heading>
      </Center>
    </Container>
  );
}

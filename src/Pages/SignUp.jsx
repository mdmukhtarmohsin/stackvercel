import { Box, Text, Input, VStack, Button, Link } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://stackoverflow-1rz2.onrender.com/users";
  const navigate = useNavigate();

  const handleSignUP = async () => {
    if (!username || !email || !password) {
      alert("Please fill all details");
      return;
    }
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
          avatar:
            "https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256",
        }),
      });
      res = await res.json();
      console.log(res);
      alert("SignUp Succeful");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <VStack>
        <Text as="h1" fontSize="5xl" mt="10%">
          SignUp Page
        </Text>
        <Box>
          <Text>Username</Text>
          <Input
            isRequired
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Text>Email</Text>
          <Input
            isRequired
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Text>Password</Text>
          <Input
            isRequired
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Box>
        <Button onClick={handleSignUP}>Sign Up</Button>
        <Text>Already have a Account ?</Text>
        <Link href="./">Click Here</Link>
      </VStack>
    </>
  );
};

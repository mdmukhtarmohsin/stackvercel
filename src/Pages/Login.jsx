import { Box, Text, Input, VStack, Button, Link } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://stackoverflow-1rz2.onrender.com/users";
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all details");
      return;
    }
    try {
      let res = await fetch(url);
      res = await res.json();
      res = res.filter((e) => {
        if (e.email == email && e.password == password) {
          return true;
        }
        return false;
      });
      if (res.length > 0) {
        localStorage.setItem("user", JSON.stringify(res[0]));
        alert("Login Succesfull");
        navigate("./forum");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <VStack>
        <Text as="h1" fontSize="5xl" mt="10%">
          Login Page
        </Text>
        <Box>
          <Text>Email</Text>
          <Input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Text>Password</Text>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Box>
        <Button onClick={handleLogin}>Login</Button>
        <Text>Dont have an Account ?</Text>
        <Link href="./signup">Click Here</Link>
      </VStack>
    </>
  );
};

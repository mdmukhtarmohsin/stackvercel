/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../redux/action";
import { useEffect } from "react";
import {
  Card,
  CardBody,
  Text,
  Image,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Forum = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ques = useSelector((state) => state.questions);
  console.log("forum", ques);
  useEffect(() => {
    getdata(dispatch);
  }, []);
  return (
    <>
      <VStack justify="center" align="center">
        {ques.length > 0 &&
          ques.map((que, index) => {
            return (
              <Card
                key={que.question.username}
                variant="outline"
                width="50%"
                onClick={() => {
                  navigate(`/answer/${index}`);
                }}
              >
                <CardBody>
                  <HStack justify="space-around">
                    <VStack>
                      <Image
                        borderRadius="full"
                        boxSize="150px"
                        src={que.question.userAvatar}
                      />
                      <Text>{que.question.username}</Text>
                    </VStack>
                    <VStack align="space-around">
                      <Text>{que.question.questionTitle}</Text>
                      <HStack>
                        <Text>{que.question.language}</Text>
                        <Text>{que.question.postedDate}</Text>
                        <Text>{que.question.answers} Answers</Text>
                      </HStack>
                    </VStack>
                    <Text>{que.question.upvotes} Upvotes</Text>
                  </HStack>
                  {user && user.username === que.question.username && (
                    <>
                      <HStack justify="center">
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                      </HStack>
                    </>
                  )}
                </CardBody>
              </Card>
            );
          })}
      </VStack>
    </>
  );
};

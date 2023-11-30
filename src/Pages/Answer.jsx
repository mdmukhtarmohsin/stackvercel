import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  Text,
  Image,
  HStack,
  VStack,
  Button,
  Input,
} from "@chakra-ui/react";

export const Answer = () => {
  const { id } = useParams();
  const ques = useSelector((state) => state.questions);
  return (
    <>
      <VStack justify="center">
        <Card key={ques[id].question.username} variant="outline" width="50%">
          <CardBody>
            <HStack justify="space-around">
              <VStack>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={ques[id].question.userAvatar}
                />
                <Text>{ques[id].question.username}</Text>
              </VStack>
              <VStack align="space-around">
                <Text>{ques[id].question.questionTitle}</Text>
                <HStack>
                  <Text>{ques[id].question.language}</Text>
                  <Text>{ques[id].question.postedDate}</Text>
                  <Text>{ques[id].question.answers} Answers</Text>
                </HStack>
              </VStack>
              <Text>{ques[id].question.upvotes} Upvotes</Text>
            </HStack>
          </CardBody>
        </Card>
        <Input
          size="lg"
          width="50%"
          height="20vh"
          placeholder="Write an answer..."
        />
        <Button>Submit Answer</Button>
        <Text>Answers ({ques[id].answers.length})</Text>
        {ques[id].answers.length > 0 &&
          ques[id].answers.map((ans) => {
            return (
              <>
                <VStack justify="center" width="100%">
                  <Card key={ans.username} variant="outline" width="50%">
                    <CardBody>
                      <HStack justify="space-around">
                        <VStack>
                          <Image
                            borderRadius="full"
                            boxSize="80px"
                            src={ans.userAvatar}
                          />
                          <Text>{ans.username}</Text>
                        </VStack>
                        <VStack align="space-around">
                          <Text>{ans.answerText}</Text>
                        </VStack>
                      </HStack>
                    </CardBody>
                  </Card>
                </VStack>
              </>
            );
          })}
      </VStack>
    </>
  );
};

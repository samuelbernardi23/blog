import { Card, Flex, HStack, Stack, Text, Button, Box } from '@chakra-ui/react';
import { PostInterface } from '../interfaces/Post';
import Cookies from 'js-cookie';
import { LuTrash2 } from 'react-icons/lu';

interface PostListProps {
  loading: boolean;
  posts: PostInterface[];
  onDelete: Function; 
}

const PostList = ({ loading, posts, onDelete }: PostListProps) => {
  const usernameFromCookie = Cookies.get('UserId'); 
  console.log(usernameFromCookie);

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh" bg="gray.100">
        <Text fontSize="xl" color="black">
          Carregando...
        </Text>
      </Flex>
    );
  }

  return (
    <div style={{ height: '73vh', overflowY: 'auto', marginTop: '8vh' }}>
      {posts.map((post: PostInterface) => (
        <Card.Root key={post.id} margin={8} shadow={'sm'}>
          <Card.Body>
            <Flex justify="space-between" align="center">
              <HStack mb="6" gap="3">
                <Text fontWeight="semibold" textStyle="md">
                  {post.title}
                </Text>
              </HStack>

              {post.createdBy.id === usernameFromCookie && (
                <Button
                  colorScheme="red"
                  size="sm"
                  variant={'outline'}
                  onClick={() => onDelete(post)}
                  ml="auto"
                >
                  {/* @ts-expect-error */}
                  <LuTrash2 color='red' />
                </Button>
              )}
            </Flex>
            <Card.Description gap={8}>
              <Box marginBottom={8}>
                <Text>{post.content}</Text>
              </Box>

              <Stack direction={'row'} gap="4">
                <Text color={'blackAlpha.400'} fontWeight="semibold" textStyle="sm">
                  {post.createdBy.userName}
                </Text>
                <Text color={'blackAlpha.400'}>{post.createdAt}</Text>

              </Stack>
            </Card.Description>
          </Card.Body>
        </Card.Root>
      ))}
    </div>
  );
};

export default PostList;

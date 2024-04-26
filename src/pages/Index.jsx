import { Box, Flex, Input, IconButton, Stack, Text, Image, AspectRatio, VStack, Heading, Spacer, Container, Grid, GridItem } from "@chakra-ui/react";
import { FaSearch, FaRegThumbsUp, FaRegThumbsDown, FaShare } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex bg="red.600" p={4} color="white" alignItems="center">
        <Heading size="lg" ml="8">
          MyTube
        </Heading>
        <Spacer />
        <Box flex="1" maxW="600px">
          <Input placeholder="Search" pr="4.5rem" />
          <IconButton aria-label="Search database" icon={<FaSearch />} position="absolute" right="10" top="2" colorScheme="teal" />
        </Box>
        <Spacer />
        <Box mr="8">
          <Text fontWeight="bold">Login</Text>
        </Box>
      </Flex>

      {/* Main Content */}
      <Container maxW="container.xl" mt={10}>
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={8}>
            <AspectRatio ratio={16 / 9}>
              <iframe title="naruto" src="https://www.youtube.com/embed/QhBnZ6NPOY0" allowFullScreen />
            </AspectRatio>
            <VStack align="start" p={4}>
              <Heading size="md">Naruto Uzumaki</Heading>
              <Text color="gray.600">2.3M views • 1 day ago</Text>
              <Flex w="full">
                <IconButton aria-label="like" icon={<FaRegThumbsUp />} />
                <IconButton aria-label="dislike" icon={<FaRegThumbsDown />} />
                <IconButton aria-label="share" icon={<FaShare />} />
              </Flex>
            </VStack>
          </GridItem>
          <GridItem colSpan={4}>
            <VStack spacing={4}>
              <VideoThumbnail title="Next Video" author="Anime Channel" views="1M views" uploadTime="1 hour ago" videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ" />
              <VideoThumbnail title="Another Video" author="Music Vevo" views="500K views" uploadTime="2 days ago" videoSrc="https://www.youtube.com/embed/V-_O7nl0Ii0" />
              {/* More videos can be added here */}
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

const VideoThumbnail = ({ title, author, views, uploadTime, videoSrc }) => (
  <Box w="full" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <AspectRatio ratio={16 / 9}>
      <iframe title={title} src={videoSrc} allowFullScreen />
    </AspectRatio>
    <Box p="4">
      <Heading size="sm">{title}</Heading>
      <Text fontSize="sm">{author}</Text>
      <Text fontSize="xs" color="gray.600">
        {views} • {uploadTime}
      </Text>
    </Box>
  </Box>
);

export default Index;

import React from 'react';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { postAPI } from '../../services/PostService';
import PostItem from './Post/Post';
import { Post } from '../../interfaces/post.interface';

const Posts = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(20);
  const [createPost, { isLoading: isCreateLoading }] = postAPI.useCreatePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [deletePost] = postAPI.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as Post);
  };

  const handleUpdate = async (post: Post) => {
    await updatePost(post);
  };

  const handleDelete = async (post: Post) => {
    await deletePost(post);
  };

  return (
    <Box>
      <h1>Posts</h1>
      <Box>
        {isLoading && <CircularProgress />}

        {error && <Typography>Something went wrong...</Typography>}

        <Button
          variant="contained"
          color={'primary'}
          sx={{ m: 1 }}
          disabled={isCreateLoading}
          onClick={handleCreate}
          endIcon={isCreateLoading ? <CircularProgress size={'18px'} /> : <SendIcon />}
        >
          Create Post
        </Button>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
            },
          }}
        >
          {!!posts &&
            posts.map((post) => <PostItem post={post} key={post.id} update={handleUpdate} remove={handleDelete} />)}
        </Box>
      </Box>
    </Box>
  );
};

export default Posts;

import React from 'react';
import { PostProps } from '../../../interfaces/post.interface';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PostItem = ({ post, update, remove }: PostProps) => {
  const handleUpdate = async (event: React.MouseEvent) => {
    const title = prompt() || '';
    update({ ...post, title });
  };

  const handleDelete = async (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  return (
    <Card sx={{ maxWidth: 345, width: '100%', height: 'auto' }} data-testid={'post-item'}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1668260081878-80441f7a6a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleUpdate}>
          Update
        </Button>
        <Button size="small" onClick={handleDelete}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostItem;

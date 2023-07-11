import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Post } from "./types";
import { getComments } from "./api";
import { useQuery } from "@tanstack/react-query";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "./components/Loader/Loader";

type UrlParams = {
  id: string;
};

const PostDetail = () => {
  const postId = useParams<UrlParams>().id;

  const navigate = useNavigate();

  const post = useLocation().state as Post | undefined;

  const { data: comments, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: ({ queryKey }) => getComments(+(queryKey[1] ?? 0)),
  });

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Layout>
      <Box display="flex" gap={2}>
        <IconButton onClick={handleBack} sx={{ alignSelf: "center" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1" gutterBottom>
          {post?.title}
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        {post?.body}
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Comments
      </Typography>
      <Loader loading={isLoading}>
        <List>
          {comments?.map((comment) => (
            <ListItem key={comment.id}>{comment.body}</ListItem>
          ))}
        </List>
      </Loader>
    </Layout>
  );
};

export default PostDetail;

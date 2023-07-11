import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";
import Layout from "./components/Layout/Layout";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Post } from "./types";
import Loader from "./components/Loader/Loader";

const PostList = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const navigate = useNavigate();

  const handleClick = (post: Post) => {
    navigate(`/post/${post.id}`, { state: post });
  };

  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Posts
      </Typography>
      <Loader loading={isLoading}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts?.map((post) => (
                <TableRow key={post.id} hover onClick={() => handleClick(post)}>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Loader>
    </Layout>
  );
};

export default PostList;

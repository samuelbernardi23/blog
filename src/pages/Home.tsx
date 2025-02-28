import '../styles/Home.css'
import { InputPost } from '../components/InputPost';
import Navbar from '../components/NavBar';
import PostList from '../components/PostList';
import { useEffect, useState } from 'react';
import { PostInterface } from '../interfaces/Post';
import { createPost, deletePost, fetchPost } from '../repositories/posts.repository';
import toast from 'react-hot-toast';
import { logout } from '../repositories/auth.repository ';

export function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const [posts, setPosts] = useState<PostInterface[]>([]);


  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])

  const fetchData = async () => {

    try {
      const data = await fetchPost()
      setPosts(data)
      setLoading(false)
    } catch (error) {
      console.log(error);

    }
  }

  const onSubmit = async (post: PostInterface) => {
    try {

      await toast.promise(
        createPost(post),
        {
          loading: 'Inserindo...',
          success: <b>Post inserido com sucesso!</b>,
          error: <b>Erro ao inserir post.</b>,
        },
        {
          position: 'top-right'
        }
      );
      await fetchData()

      return true
    } catch (error) {
      console.log(error);

    }
  }

  const onDelete = async (post: PostInterface) => {
    try {
      await deletePost(post)
      await fetchData()

      toast.success('Post removido com sucesso!')
    } catch (error) {

    }
  }
  const onExit = async () => {
    try {

      await logout()
      window.location.href = '/login';


      toast('Logout realizado com sucesso!')
    } catch (error) {

    }
  }

  return (
    <div style={{ overflow: 'hidden' }}>

      <Navbar onExit={onExit}></Navbar>
      <PostList onDelete={onDelete} loading={loading} posts={posts} ></PostList>
      <InputPost onSubmit={onSubmit}></InputPost>
    </div>
  );
}

export default App;

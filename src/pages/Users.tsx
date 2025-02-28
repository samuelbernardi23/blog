import '../styles/Home.css'
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { logout } from '../repositories/auth.repository ';
import { Button, Editable, IconButton, Table } from '@chakra-ui/react';
import { deleteUser, fetchUser, updateUser } from '../repositories/users.repository';
import Navbar from '../components/NavBar';
import { LuPencilLine } from 'react-icons/lu';
import { UserInterface } from '../interfaces/User';

export function Users() {
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    try {
      const data = await fetchUser()
      setUsers(data)
    } catch (error) {
      console.log(error);

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

  const onClickRemove = async (user: UserInterface) => {
    try {
      await deleteUser(user)

      fetchData()
      toast.success('Usuário removido com sucesso')
    } catch (error) {
      toast.error("Erro ao remover usuário")
    }
  }

  const onValueChange = async (e: { value: string }, property: string, user: any) => {
    user[property] = e.value;

    const { id, email, userName } = user
    try {
      await updateUser({ id, email, userName })

      fetchData()
      toast.success('Usuário alterado com sucesso')
    } catch (error) {
      toast.error("Erro ao alterar usuário")
    }
  }
  return <>
    <Navbar onExit={onExit}></Navbar>
    <Table.Root size="sm" striped marginTop={'8vh'}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Id</Table.ColumnHeader>
          <Table.ColumnHeader>Usuário</Table.ColumnHeader>
          <Table.ColumnHeader>E-mail</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Ações</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body w={'100vw'}>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>
              {user.id}
            </Table.Cell>
            <Table.Cell>
              <Editable.Root textAlign="start" defaultValue={user.email} onValueCommit={(e: any) => onValueChange(e, 'userName', user)}>
                <Editable.Preview />
                <Editable.Input />
                <Editable.Control>
                  <Editable.EditTrigger>
                    <IconButton variant="ghost" size="xs">
                      {/* @ts-expect-error */}

                      <LuPencilLine />
                    </IconButton>
                  </Editable.EditTrigger>
                </Editable.Control>
              </Editable.Root>
            </Table.Cell>
            <Table.Cell>
              <Editable.Root textAlign="start" defaultValue={user.email} onValueCommit={(e: any) => onValueChange(e, 'email', user)}>
                <Editable.Preview />
                <Editable.Input />
                <Editable.Control>
                  <Editable.EditTrigger>
                    <IconButton variant="ghost" size="xs">
                      {/* @ts-expect-error */}

                      <LuPencilLine />
                    </IconButton>
                  </Editable.EditTrigger>
                </Editable.Control>
              </Editable.Root>
            </Table.Cell>
            <Table.Cell textAlign="end">
              <Button variant={'ghost'} onClick={() => onClickRemove(user)}>Remover</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  </>
}

export default Users;

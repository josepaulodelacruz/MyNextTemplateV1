import { query } from "@/lib/db";
import { Container, Text } from "@mantine/core";
import { Suspense } from 'react'

type User = {
  id: number,
  email: string,
  password: string,
  created_date: string,
}

async function UserList() {
  const users = await query<User>('SELECT id, email, password, created_date FROM users');

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name} ({u.email})</li>
      ))}
    </ul>
  );
}

export default async function Users() {
  return (
    <Container>
      <Text>User ID</Text>
      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
      </Suspense>
    </Container>
  );
}



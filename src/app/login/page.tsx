'use client'

import {
  Container,
  Card,
  Stack,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Group,
  Anchor,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { AtSign, Lock, LogIn } from "lucide-react";

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email address"),
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters long" : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("Login Form Submitted:", values);
    // Perform authentication logic / API call here
  };

  return (
    <Container
      fluid
      bg="var(--mantine-color-gray-1)"
      p={0}
      h="100vh"
      style={{ display: "grid", placeItems: "center" }}
    >
      <Card
        withBorder
        shadow="md"
        p={30}
        radius="md"
        w={{ base: "90%", sm: "420px" }}
      >
        <Stack spacing="md">
          <Stack spacing={4} align="center">
            <Title order={2} ta="center" fw={700}>
              Welcome Back
            </Title>
            <Text c="dimmed" size="sm" ta="center">
              Sign in to your account to continue
            </Text>
          </Stack>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack spacing="md">
              <TextInput
                required
                label="Email Address"
                placeholder="you@example.com"
                leftSection={<AtSign size={16} />}
                {...form.getInputProps("email")}
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                leftSection={<Lock size={16} />}
                {...form.getInputProps("password")}
              />

              <Group justify="space-between" mt="xs">
                <Checkbox
                  label="Remember me"
                  {...form.getInputProps("rememberMe", { type: "checkbox" })}
                />
                <Anchor component="button" type="button" size="sm" c="blue">
                  Forgot password?
                </Anchor>
              </Group>

              <Button
                type="submit"
                fullWidth
                mt="md"
                leftSection={<LogIn size={18} />}
              >
                Sign In
              </Button>
            </Stack>
          </form>

          <Text c="dimmed" size="sm" ta="center" mt="xs">
            Don't have an account?{" "}
            <Anchor component="button" type="button" fw={500} c="blue">
              Register
            </Anchor>
          </Text>
        </Stack>
      </Card>
    </Container>
  );
}

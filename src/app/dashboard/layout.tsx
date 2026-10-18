"use client"

import { useRouter, usePathname } from 'next/navigation'
import React, { useCallback } from 'react';
import {
  AppShell,
  Group,
  Stack,
  Text,
  TextInput,
  ActionIcon,
  Badge,
  Avatar,
  Menu,
  UnstyledButton,
  Paper,
  ThemeIcon,
  Indicator,
  Burger,
  NavLink,
  Code,
  Box,
  useMantineColorScheme,
  useMantineTheme,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  LayoutDashboard,
  Settings,
  Search,
  Bell,
  Sun,
  Moon,
  CheckCircle2,
  AlertTriangle,
  LogOut,
  User,
  Users,
  Building2,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Overview', icon: LayoutDashboard, badge: null, to: "/dashboard" },
  { label: 'Users', icon: Users, badge: null, to: '/dashboard/users' },
  { label: 'Settings', icon: Settings, badge: null, to: '/dashboard/settings' },
];

interface DashboardProps {
  children: React.ReactNode
}

export default function Dashboard({ children }: DashboardProps) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const router = useRouter();
  const pathname = usePathname();

  const isDark = colorScheme === 'dark';

  const handleNavigate = useCallback((to: string) => {
    router.push(to);
  }, [router]);

  const handleLogoutEvent = useCallback(() => {

  }, [])

  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{
        width: desktopOpened ? 260 : 80,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened },
      }}
      padding="md"
      styles={{
        main: {
          backgroundColor: isDark ? theme.colors.dark[8] : theme.colors.gray[0],
          minHeight: '100vh',
        },
      }}
    >
      <AppShell.Header p="md" bd={isDark ? '1px solid var(--mantine-color-dark-6)' : '1px solid var(--mantine-color-gray-3)'}>
        <Group h="100%" justify="space-between">
          <Group>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />

            <TextInput
              placeholder="Search resources, reports, passes..."
              leftSection={<Search size={16} />}
              rightSection={
                <Code fw={700} style={{ fontSize: rem(10) }}>
                  ⌘K
                </Code>
              }
              w={{ base: 180, sm: 300, md: 360 }}
              radius="md"
              size="xs"
            />
          </Group>

          <Group gap="xs">
            <ActionIcon
              variant="default"
              size="lg"
              radius="md"
              onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
              title="Toggle color scheme"
            >
              {isDark ? <Sun size={18} color={theme.colors.yellow[4]} /> : <Moon size={18} />}
            </ActionIcon>

            <Menu shadow="md" width={240} position="bottom-end">
              <Menu.Target>
                <Indicator inline size={8} color="blue" offset={4}>
                  <ActionIcon variant="default" size="lg" radius="md">
                    <Bell size={18} />
                  </ActionIcon>
                </Indicator>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Notifications (3 Unread)</Menu.Label>
                <Menu.Item leftSection={<CheckCircle2 size={14} color="teal" />}>
                  <Text size="xs" fw={500}>Gate Pass Approved</Text>
                  <Text size="dimmed" style={{ fontSize: rem(10) }}>Truck #402 cleared at North Gate.</Text>
                </Menu.Item>
                <Menu.Item leftSection={<AlertTriangle size={14} color="orange" />}>
                  <Text size="xs" fw={500}>Daily Report Flagged</Text>
                  <Text size="dimmed" style={{ fontSize: rem(10) }}>Safety issue marked on Zone 2.</Text>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Menu shadow="md" width={200} position="bottom-end">
              <Menu.Target>
                <UnstyledButton p={4} style={{ borderRadius: '50%' }}>
                  <Avatar radius="xl" size="sm" color="indigo">
                    AR
                  </Avatar>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Alex Rivera</Menu.Label>
                <Menu.Item leftSection={<User size={14} />}>Profile</Menu.Item>
                <Menu.Item leftSection={<Settings size={14} />}>Account Settings</Menu.Item>
                <Menu.Divider />
                <Menu.Item onClick={handleLogoutEvent} color="red" leftSection={<LogOut size={14} />}>
                  Log out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="xs" bd={isDark ? '1px solid var(--mantine-color-dark-6)' : '1px solid var(--mantine-color-gray-3)'}>
        <AppShell.Section grow>
          <Paper
            p="xs"
            mb="md"
            radius="md"
            withBorder
            bg={isDark ? 'var(--mantine-color-dark-7)' : 'var(--mantine-color-gray-1)'}
          >
            <Group gap="xs" wrap="nowrap">
              <ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} radius="md" size="md">
                <Building2 size={18} />
              </ThemeIcon>
              {desktopOpened && (
                <Box style={{ overflow: 'hidden' }}>
                  <Text size="xs" fw={700} truncate>
                    AURA Const. Ltd.
                  </Text>
                  <Text size="dimmed" style={{ fontSize: rem(10) }} truncate>
                    Enterprise Plan
                  </Text>
                </Box>
              )}
            </Group>
          </Paper>

          <Stack gap={4}>
            {desktopOpened && (
              <Text size="xs" fw={700} c="dimmed" tt="uppercase" px="xs" mb={4}>
                Main Menu
              </Text>
            )}
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              // Check exact path match or nested route match (e.g., /dashboard/settings/account)
              const isActive = pathname === item.to || (item.to !== '/dashboard' && pathname.startsWith(item.to));

              return (
                <NavLink
                  key={item.label}
                  label={desktopOpened ? item.label : null}
                  leftSection={<Icon size={18} />}
                  rightSection={
                    desktopOpened && item.badge ? (
                      <Badge size="xs" variant={item.badge === 'Pro' ? 'filled' : 'light'} color={item.badge === 'Pro' ? 'amber' : 'blue'}>
                        {item.badge}
                      </Badge>
                    ) : null
                  }
                  active={isActive}
                  onClick={() => handleNavigate(item.to)}
                  radius="md"
                  variant="light"
                  style={{
                    fontWeight: isActive ? 600 : 400,
                  }}
                />
              );
            })}
          </Stack>
        </AppShell.Section>

        <AppShell.Section pt="xs" style={{ borderTop: isDark ? '1px solid var(--mantine-color-dark-6)' : '1px solid var(--mantine-color-gray-3)' }}>
          <Group gap="xs" wrap="nowrap">
            <Indicator color="green" size={8} offset={2} position="bottom-end">
              <Avatar radius="md" size="sm" color="indigo">
                AR
              </Avatar>
            </Indicator>
            {desktopOpened && (
              <Box style={{ overflow: 'hidden' }}>
                <Text size="xs" fw={600} truncate>
                  Alex Rivera
                </Text>
                <Text size="dimmed" style={{ fontSize: rem(10) }} truncate>
                  Operations Lead
                </Text>
              </Box>
            )}
          </Group>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

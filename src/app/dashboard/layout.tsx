"use client"

import React, { useState } from 'react';
import {
  AppShell,
  Group,
  Stack,
  Text,
  Title,
  TextInput,
  ActionIcon,
  Badge,
  Avatar,
  Menu,
  UnstyledButton,
  Paper,
  Table,
  Grid,
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
  FolderKanban,
  FileText,
  Ticket,
  BarChart3,
  Settings,
  Search,
  Bell,
  Sun,
  Moon,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Plus,
  Building2,
  DollarSign,
  Briefcase,
  Zap,
  Activity,
  CheckCircle2,
  Clock,
  AlertTriangle,
  LogOut,
  User,
  Users,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Overview', icon: LayoutDashboard, badge: null, active: true },
  { label: 'Users', icon: Users, active: false }
  // { label: 'Projects', icon: FolderKanban, badge: '12' },
  // { label: 'Daily Reports', icon: FileText, badge: null },
  // { label: 'Gate Passes', icon: Ticket, badge: '5 New' },
  // { label: 'Analytics', icon: BarChart3, badge: 'Pro' },
  // { label: 'Settings', icon: Settings, badge: null },
];

const STATS_DATA = [
  {
    title: 'Total Revenue',
    value: '$124,592.00',
    change: '+14.2%',
    isPositive: true,
    timeframe: 'vs last month',
    icon: DollarSign,
    color: 'teal',
  },
  {
    title: 'Active Projects',
    value: '38 Active',
    change: '+4 New',
    isPositive: true,
    timeframe: 'in current sprint',
    icon: Briefcase,
    color: 'blue',
  },
  {
    title: 'Pass Velocity',
    value: '94.2%',
    change: '-1.8%',
    isPositive: false,
    timeframe: 'gate turnaround',
    icon: Zap,
    color: 'amber',
  },
  {
    title: 'Active Field Crew',
    value: '14 / 18 Online',
    change: '+12.5%',
    isPositive: true,
    timeframe: 'high activity',
    icon: Activity,
    color: 'violet',
  },
];

const RECENT_LOGS = [
  { id: 'LOG-8841', task: 'Site inspection & structural report submission', category: 'Civil', status: 'Completed', assignee: 'Alex Rivera' },
  { id: 'LOG-8842', task: 'Gate Pass #1092 issued for heavy equipment', category: 'Logistics', status: 'In Progress', assignee: 'Elena Rostova' },
  { id: 'LOG-8843', task: 'HVAC maintenance daily log approval', category: 'MEP', status: 'Pending', assignee: 'Sarah Chen' },
  { id: 'LOG-8844', task: 'Electrical panel safety checklist audit', category: 'Safety', status: 'In Progress', assignee: 'David Ortega' },
  { id: 'LOG-8845', task: 'Concrete pouring quality verification', category: 'Civil', status: 'Completed', assignee: 'Alex Rivera' },
];

const ACTIVITIES = [
  { id: 1, user: 'Sarah Chen', action: 'approved Gate Pass', target: '#GP-4029', time: '10m ago' },
  { id: 2, user: 'Elena Rostova', action: 'submitted Daily Log', target: 'Tower B - Electrical', time: '32m ago' },
  { id: 3, user: 'Alex Rivera', action: 'completed milestone', target: 'Foundation Inspection', time: '2h ago' },
  { id: 4, user: 'David Ortega', action: 'flagged safety concern', target: 'Zone 4 Scaffolding', time: '4h ago' },
];

export default function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [activeTab, setActiveTab] = useState('Overview');
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const isDark = colorScheme === 'dark';

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
      {}
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
                <Menu.Item color="red" leftSection={<LogOut size={14} />}>
                  Log out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      {}
      <AppShell.Navbar p="xs" bd={isDark ? '1px solid var(--mantine-color-dark-6)' : '1px solid var(--mantine-color-gray-3)'}>
        <AppShell.Section grow>
          {/* Workspace Info Header */}
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

          {/* Navigation Links */}
          <Stack gap={4}>
            {desktopOpened && (
              <Text size="xs" fw={700} c="dimmed" tt="uppercase" px="xs" mb={4}>
                Main Menu
              </Text>
            )}
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.label;

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
                  onClick={() => setActiveTab(item.label)}
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

        {/* User Footer Profile */}
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

      {}
      <AppShell.Main>
        <Stack gap="lg">
          {/* Dashboard Header Bar */}
          <Group justify="space-between" align="center">
            <Box>
              <Text size="xs" c="dimmed">
                Dashboard / <Text span c="blue" fw={500}>{activeTab}</Text>
              </Text>
              <Title order={2} size="h3" fw={700}>
                {activeTab} Overview
              </Title>
            </Box>

            <Group gap="xs">
              <ActionIcon variant="light" size="lg" radius="md">
                <Plus size={18} />
              </ActionIcon>
            </Group>
          </Group>

          {}
          <Grid>
            {STATS_DATA.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Grid.Col span={{ base: 12, sm: 6, lg: 3 }} key={idx}>
                  <Paper p="md" radius="md" withBorder>
                    <Group justify="space-between" mb="xs">
                      <Text size="xs" c="dimmed" fw={700} tt="uppercase">
                        {stat.title}
                      </Text>
                      <ThemeIcon color={stat.color} variant="light" radius="md">
                        <Icon size={18} />
                      </ThemeIcon>
                    </Group>

                    <Group align="flex-end" justify="space-between">
                      <Box>
                        <Text fw={700} size="xl">
                          {stat.value}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {stat.timeframe}
                        </Text>
                      </Box>

                      <Badge
                        variant="light"
                        color={stat.isPositive ? 'teal' : 'red'}
                        leftSection={stat.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      >
                        {stat.change}
                      </Badge>
                    </Group>
                  </Paper>
                </Grid.Col>
              );
            })}
          </Grid>

          {}
          <Grid>
            {/* Field Activity Logs Table */}
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Paper p="md" radius="md" withBorder h="100%">
                <Group justify="space-between" mb="md">
                  <Box>
                    <Text fw={600} size="sm">
                      Recent Field Activity Logs
                    </Text>
                    <Text size="xs" c="dimmed">
                      Real-time status of site requests and reports
                    </Text>
                  </Box>
                  <Text size="xs" c="blue" style={{ cursor: 'pointer', fontWeight: 500 }}>
                    View All
                  </Text>
                </Group>

                <Table highlightOnHover verticalSpacing="xs">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>ID</Table.Th>
                      <Table.Th>Task Description</Table.Th>
                      <Table.Th>Category</Table.Th>
                      <Table.Th>Status</Table.Th>
                      <Table.Th>Assignee</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {RECENT_LOGS.map((log) => (
                      <Table.Tr key={log.id}>
                        <Table.Td>
                          <Code color="gray" style={{ fontSize: rem(10) }}>
                            {log.id}
                          </Code>
                        </Table.Td>
                        <Table.Td>
                          <Text size="xs" fw={500}>
                            {log.task}
                          </Text>
                        </Table.Td>
                        <Table.Td>
                          <Badge size="xs" variant="outline" color="gray">
                            {log.category}
                          </Badge>
                        </Table.Td>
                        <Table.Td>
                          <Badge
                            size="xs"
                            variant="light"
                            color={
                              log.status === 'Completed'
                                ? 'teal'
                                : log.status === 'In Progress'
                                ? 'blue'
                                : 'amber'
                            }
                          >
                            {log.status}
                          </Badge>
                        </Table.Td>
                        <Table.Td>
                          <Text size="xs" c="dimmed">
                            {log.assignee}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Paper>
            </Grid.Col>

            {/* Live Audit Trail Feed */}
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Paper p="md" radius="md" withBorder h="100%">
                <Group justify="space-between" mb="md">
                  <Text fw={600} size="sm">
                    Live Audit Trail
                  </Text>
                  <Indicator color="green" size={8} processing />
                </Group>

                <Stack gap="md">
                  {ACTIVITIES.map((act) => (
                    <Group key={act.id} align="flex-start" wrap="nowrap" gap="xs">
                      <Avatar radius="xl" size="sm" color="blue">
                        {act.user.substring(0, 2)}
                      </Avatar>
                      <Box style={{ flex: 1 }}>
                        <Text size="xs">
                          <Text span fw={600}>
                            {act.user}
                          </Text>{' '}
                          <Text span c="dimmed">
                            {act.action}
                          </Text>{' '}
                          <Text span c="blue" fw={500}>
                            {act.target}
                          </Text>
                        </Text>
                        <Group gap={4} mt={2}>
                          <Clock size={10} color={theme.colors.gray[6]} />
                          <Text size="dimmed" style={{ fontSize: rem(10) }}>
                            {act.time}
                          </Text>
                        </Group>
                      </Box>
                    </Group>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

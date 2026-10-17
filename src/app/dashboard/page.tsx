'use client'
import {
  Group,
  Stack,
  Text,
  Title,
  ActionIcon,
  Badge,
  Avatar,
  Paper,
  Table,
  Grid,
  ThemeIcon,
  Indicator,
  Code,
  Box,
  rem,
  useMantineTheme,
} from '@mantine/core'; 
import { Briefcase, DollarSign, Zap, Activity, Clock, Plus, TrendingUp, TrendingDown } from 'lucide-react';

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


export default function Dashboard() {
  const theme = useMantineTheme();

  return (
    <Stack gap="lg">
      {/* Dashboard Header Bar */}
      <Group justify="space-between" align="center">
        <Box>
          <Text size="xs" c="dimmed">
            {/* Dashboard / <Text span c="blue" fw={500}>{activeTab}</Text> */}
          </Text>
          <Title order={2} size="h3" fw={700}>
            {/* {activeTab} Overview */}
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
  )
}


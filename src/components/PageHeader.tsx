import { Group, Box, Text, ActionIcon, Title, Breadcrumbs, Anchor } from "@mantine/core"
import { Plus } from 'lucide-react'

export interface Route {
  label: string
  path?: string
}

interface PageHeaderProps {
  routes?: Route[] | null
  title?: string
  onActionClick?: () => void
}

export function PageHeader({ routes, title }: PageHeaderProps) {
  const breadcrumbItems = routes?.map((route, index) => {
    const isLast = index === routes.length - 1

    if (isLast || !route.path) {
      return (
        <Text key={index} size="xs" c="blue" fw={500}>
          {route.label}
        </Text>
      )
    }

    return (
      <Anchor key={index} href={route.path} size="xs" c="dimmed">
        {route.label}
      </Anchor>
    )
  }) || []

  return (
    <Group justify="space-between" align="center">
      <Box>
        {routes && routes.length > 0 ? (
          <Breadcrumbs separator="/" mb={4} separatorMargin={4}>
            {breadcrumbItems}
          </Breadcrumbs>
        ) : (
          <Text size="xs" c="dimmed">
              {title}
          </Text>
        )}
        
        <Title order={2} size="h3" fw={700}>
          {title}
        </Title>
      </Box>

      <Group gap="xs">
        <ActionIcon variant="light" size="lg" radius="md">
          <Plus size={18} />
        </ActionIcon>
      </Group>
    </Group>
  )
}

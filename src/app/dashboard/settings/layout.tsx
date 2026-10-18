'use client'

import { Container, Tabs } from '@mantine/core'
import { PageHeader } from '@/components/PageHeader'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()

  // Defin your settings tab configuration
  const tabs = [
    { label: 'Menu Items', value: '/dashboard/settings/menu' },
  ]

  // Find the matching tab path (handles exact path or active sub-paths)
  const currentTab = tabs.find((tab) => pathname === tab.value)?.value ?? tabs[0].value

  const handleTabChange = (value: string | null) => {
    if (value) {
      router.push(value)
    }
  }

  return (
    <Container fluid p={0}>
      <PageHeader
        title="Settings"
        routes={[
          { label: 'Dashboard', path: '/dashboard' },
          { label: 'Settings' }
        ]}
      />

      <Tabs value={currentTab} onChange={handleTabChange} mt="md">
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab key={tab.value} value={tab.value}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      {/* Renders the child page route content under the tabs */}
      <div style={{ marginTop: '1rem' }}>
        {children}
      </div>
    </Container>
  )
}

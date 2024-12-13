import { Layout } from 'antd'

import { NavSidebar } from '../../ui/nav-sidebar'
import { SideContent } from '../../ui/side-content'
import { StepsHeader } from '../../ui/steps-header'
import {
  ContentLayout,
  CustomContent,
  CustomHeader,
  CustomSider,
} from './styles'

export function DashboardLayout() {
  return (
    <Layout>
      <CustomSider theme="light" trigger={null} collapsible collapsed>
        <div
          style={{
            width: '100%',
            background: 'white',
            height: '3rem',
            position: 'absolute',
            zIndex: '2',
            top: '3rem',
          }}
        ></div>
        <NavSidebar />
      </CustomSider>
      <ContentLayout>
        <CustomHeader>
          <StepsHeader />
        </CustomHeader>
        <CustomContent>
          <SideContent />
          <main style={{ flex: 2 }}>Conteúdo Principal</main>
          {/* <MainContent /> */}
        </CustomContent>
      </ContentLayout>
    </Layout>
  )
}

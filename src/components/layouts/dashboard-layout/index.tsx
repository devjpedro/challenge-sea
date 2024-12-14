import { Layout } from 'antd'

import { AddEmployee } from '../../ui/add-employee'
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
          <AddEmployee />
          {/* <ListEmployee /> */}
          {/* <MainContent /> */}
        </CustomContent>
      </ContentLayout>
    </Layout>
  )
}

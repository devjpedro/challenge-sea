import { Layout } from 'antd'

import { NavSidebar } from '../../ui/nav-sidebar'
import { StepsHeader } from '../../ui/steps-header'
import { ContentLayout, CustomHeader, CustomSider } from './styles'

const { Content } = Layout

export function DashboardLayout() {
  return (
    <Layout>
      <CustomSider
        theme="light"
        trigger={null}
        collapsible
        collapsed
        className="sider"
      >
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
        <Content className="content">
          {/* <Flex gap="large"> */}
          {/* <SideContent /> */}
          {/* <MainContent /> */}
          {/* </Flex> */}
        </Content>
      </ContentLayout>
    </Layout>
  )
}

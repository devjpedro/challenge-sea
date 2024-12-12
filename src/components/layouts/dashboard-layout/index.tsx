import { Layout } from 'antd'

import { NavSidebar } from '../../ui/nav-sidebar'
import { ContentLayout, CustomSider } from './styles'

const { Content, Header } = Layout

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
        <Header className="header">Header</Header>
        <Content className="content">
          {/* <Flex gap="large">
              <MainContent />
              <SideContent />
            </Flex> */}
        </Content>
      </ContentLayout>
    </Layout>
  )
}

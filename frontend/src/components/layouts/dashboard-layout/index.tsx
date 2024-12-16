import { Layout } from 'antd'
import { Outlet } from 'react-router'

import BgImage from '../../../assets/bg-image.svg'
import { MenuMobile } from '../../ui/menu-mobile'
import { NavSidebar } from '../../ui/nav-sidebar'
import { CustomImageBg, CustomSider } from './styles'

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

      <MenuMobile />

      <CustomImageBg src={BgImage} alt="Foto de fundo da aplicação" />

      <Outlet />
    </Layout>
  )
}

import {
  FaEdit,
  FaHistory,
  FaRegBell,
  FaRegBuilding,
  FaSitemap,
  FaUser,
} from 'react-icons/fa'

import { CustomMenu } from './styles'

const navItems = [
  {
    key: '1',
    icon: <FaRegBuilding size={20} />,
    label: 'Início',
  },
  {
    key: '2',
    icon: <FaEdit size={20} />,
    label: 'Editar',
  },
  {
    key: '3',
    icon: <FaSitemap size={20} />,
    label: 'Fluxos',
  },
  {
    key: '4',
    icon: <FaRegBell size={20} />,
    label: 'Notificações',
  },
  {
    key: '5',
    icon: <FaHistory size={20} />,
    label: 'Histórico',
  },
  {
    key: '6',
    icon: <FaUser size={20} />,
    label: 'Minha Conta',
  },
]

export function NavSidebar() {
  return (
    <>
      <CustomMenu
        mode="inline"
        defaultSelectedKeys={['1']}
        className="menu-bar"
        items={navItems}
      />
    </>
  )
}

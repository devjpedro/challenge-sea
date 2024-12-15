import {
  FaEdit,
  FaHistory,
  FaRegBell,
  FaRegBuilding,
  FaSitemap,
  FaUser,
} from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router'

import { CustomMenu } from './styles'

const navItems = [
  {
    key: 'inicio',
    icon: <FaRegBuilding size={20} />,
    label: 'Início',
  },
  {
    key: 'itens',
    icon: <FaEdit size={20} />,
    label: 'Itens',
  },
  {
    key: 'fluxos',
    icon: <FaSitemap size={20} />,
    label: 'Fluxos',
  },
  {
    key: 'notificacoes',
    icon: <FaRegBell size={20} />,
    label: 'Notificações',
  },
  {
    key: 'historico',
    icon: <FaHistory size={20} />,
    label: 'Histórico',
  },
  {
    key: 'minha-conta',
    icon: <FaUser size={20} />,
    label: 'Minha Conta',
  },
]

export function NavSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const selectedKey =
    navItems.find((item) =>
      location.pathname.replace('/', '').startsWith(item.key),
    )?.key ?? 'inicio'

  const handleClickNavigate = (href: string) => {
    if (href === 'itens') {
      // pra evitar uma mini quebra de layout vou verificar se a rota clicada é itens e já redirecionar pro primeiro item
      navigate(`/${href}/1`)

      return
    }

    navigate(`/${href}`)
  }

  return (
    <>
      <CustomMenu
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        items={navItems}
        onClick={(e) => handleClickNavigate(e.key)}
      />
    </>
  )
}

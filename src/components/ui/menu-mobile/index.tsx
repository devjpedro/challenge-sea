import { Drawer, Flex } from 'antd'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router'

import { NavItemBtn, TriggerMenu } from './styles'

const navItems = [
  {
    label: 'Início',
    href: 'inicio',
  },
  {
    label: 'Itens',
    href: 'itens',
  },
  {
    label: 'Fluxos',
    href: 'fluxos',
  },
  {
    label: 'Notificações',
    href: 'notificacoes',
  },
  {
    label: 'Histórico',
    href: 'historico',
  },
  {
    label: 'Minha Conta',
    href: 'minha-conta',
  },
]

export function MenuMobile() {
  const [open, setOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const selectedKey =
    navItems.find((item) =>
      location.pathname.replace('/', '').startsWith(item.href),
    )?.href ?? 'inicio'

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const handleClickItem = (href: string) => {
    onClose()
    navigate(`/${href}`)
  }

  return (
    <>
      <TriggerMenu
        color="primary"
        variant="outlined"
        icon={<FaBars size={20} />}
        onClick={showDrawer}
      />
      <Drawer title="" onClose={onClose} open={open} placement="right">
        <Flex vertical gap="large">
          {navItems.map((item) => (
            <NavItemBtn
              key={item.label}
              type={selectedKey === item.href ? 'primary' : 'default'}
              variant={selectedKey === item.href ? 'solid' : 'outlined'}
              color="primary"
              onClick={() => handleClickItem(item.href)}
            >
              {item.label}
            </NavItemBtn>
          ))}
        </Flex>
      </Drawer>
    </>
  )
}

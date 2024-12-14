import { Drawer, Flex } from 'antd'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { NavItemBtn, TriggerMenu } from './styles'

const navItems = [
  {
    label: 'Início',
    href: '',
  },
  {
    label: 'Editar',
    href: 'editar',
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
  const [active, setActive] = useState('editar')

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
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
              type={active === item.href ? 'primary' : 'default'}
              variant={active === item.href ? 'solid' : 'outlined'}
              color="primary"
            >
              {item.label}
            </NavItemBtn>
          ))}
        </Flex>
      </Drawer>
    </>
  )
}

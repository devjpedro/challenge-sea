import { Navigate, Route, Routes } from 'react-router'

import { DashboardLayout } from '../components/layouts/dashboard-layout'
import { EmployeesLayout } from '../components/layouts/employees-layout'
import { ComingSoon } from '../components/ui/coming-soon'
import { AddEmployee } from './routes/add-employee'
import { EditEmployee } from './routes/edit-employee'
import { ListEmployee } from './routes/list-employee'

const routes = ['inicio', 'fluxos', 'notificacoes', 'historico', 'minha-conta']

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/itens/1" />} />
        <Route path="/itens" element={<Navigate to="/itens/1" />} />

        <Route path="/itens" element={<EmployeesLayout />}>
          <Route path="/itens/1" element={<ListEmployee />} />
          <Route path="/itens/1/adicionar" element={<AddEmployee />} />
          <Route path="/itens/1/editar" element={<EditEmployee />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>

        {routes.map((route) => (
          <Route
            key={route}
            path={`/${route}`}
            element={<ComingSoon layout="blank" />}
          />
        ))}

        <Route path="*" element={<Navigate to="/itens/1" />} />
      </Route>
    </Routes>
  )
}

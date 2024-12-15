import { Outlet, useLocation } from 'react-router'

import { SideContent } from '../../ui/side-content'
import { StepsHeader } from '../../ui/steps-header'
import { ContentLayout, CustomContent, CustomHeader } from './styles'

export function EmployeesLayout() {
  const location = useLocation()

  const isStepOne = location.pathname.startsWith('/itens/1')

  return (
    <ContentLayout>
      <CustomHeader>
        <StepsHeader />
      </CustomHeader>
      <CustomContent>
        {isStepOne && <SideContent />}
        <Outlet />
        {/* <AddEmployee /> */}
        {/* <ListEmployee /> */}
      </CustomContent>
    </ContentLayout>
  )
}

import { Typography } from 'antd'

import { ContainerSideContent } from './styles'

export function SideContent() {
  return (
    <ContainerSideContent vertical align="start" gap={8}>
      <Typography.Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
        dictum hendrerit. Aliquam sed eros faucibus, tincidunt risus vitae,
        sollicitudin ipsum. Sed tincidunt nunc nunc, in interdum orci rutrum
        eget. Pellentesque egestas consequat elementum. Nam tincidunt
        scelerisque sapien, ut malesuada turpis lacinia vel. Proin tempus sem
        nunc, ut vestibulum nibh vulputate et. Phasellus ut est fringilla,
        mollis risus et, aliquet mauris. Maecenas a laoreet mauris, quis
        porttitor sem. Praesent feugiat risus accumsan tellus porttitor, in
        consectetur tortor sollicitudin. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </Typography.Paragraph>

      <img src="https://placehold.co/200x200" alt="Foto Ilustrativa" />
    </ContainerSideContent>
  )
}

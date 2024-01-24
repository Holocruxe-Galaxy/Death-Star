import { ReactNode } from "react"

export type CardLinksProps = {
  activeIcon: ReactNode
  inactiveIcon: ReactNode
  name: string
  classType?: string
  href: string 
}

export type CardButtonsProps = {
  data: CardLinksProps[]
}

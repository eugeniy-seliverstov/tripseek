import type { ReactElement } from 'react'

import { TerritoryCode } from '@/types/territory'

interface TerritoryFlagProps {
  code: TerritoryCode
}

function TerritoryFlag({ code }: TerritoryFlagProps): ReactElement {
  return <img className='w-10 h-10 select-none' src={`/flags/${code}.png`} />
}

export default TerritoryFlag

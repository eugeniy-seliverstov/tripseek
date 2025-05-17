import { ReactElement } from 'react'
import { LuInfo } from 'react-icons/lu'

import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { cn } from '@/utils/cn'

interface HintProps {
  text: string
  size?: number
  className?: string
}

export const Hint = ({ text, size = 14, className = '' }: HintProps): ReactElement => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <LuInfo
          size={size}
          className={cn(
            'text-text-secondary opacity-80 hover:opacity-100 transition-opacity',
            className,
          )}
        />
      </TooltipTrigger>
      <TooltipContent className='max-w-xs'>{text}</TooltipContent>
    </Tooltip>
  )
}

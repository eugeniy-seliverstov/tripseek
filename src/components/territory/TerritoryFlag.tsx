import { TTerritoryIso3 } from "@/types/Territory"

interface TerritoryFlagProps {
  code: TTerritoryIso3
}

function TerritoryFlag({ code }: TerritoryFlagProps) {
  return (
    <img
      className="w-10 h-10"
      src={`/flags/${code}.png`}
    />
  )
}

export default TerritoryFlag
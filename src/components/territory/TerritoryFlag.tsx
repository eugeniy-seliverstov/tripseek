import { TTerritoryCode } from "@/types/Territory"

interface TerritoryFlagProps {
  code: TTerritoryCode
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
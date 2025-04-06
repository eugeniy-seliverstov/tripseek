interface StatProps {
  label: string
  visited: number
  total: number
  className?: string
}

function Stat({ label, visited, total, className = '' }: StatProps) {
  return (
    <div className={className}>
      <div className="font-semibold">
        {visited} / {total}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}

export default Stat
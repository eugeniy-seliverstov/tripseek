import Stat from './Stat'
import useUserStatistics from '@/hooks/useUserStatistics'

function Statistics() {
  const stats = useUserStatistics()

  return (
    <div className="flex justify-between text-center text-md">
      {stats.map(({ label, visited, total }) => (
        <Stat key={label} className="w-1/3" label={label} visited={visited} total={total} />
      ))}
    </div>
  )
}

export default Statistics
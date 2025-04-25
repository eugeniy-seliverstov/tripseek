import Stat from './Stat'
import useStatistics from '@/hooks/useStatistics'

function Statistics() {
  const stats = useStatistics()

  return (
    <div className="flex justify-between text-center text-md">
      {stats.map(({ label, visited, total }) => (
        <Stat key={label} className="w-1/3" label={label} visited={visited} total={total} />
      ))}
    </div>
  )
}

export default Statistics
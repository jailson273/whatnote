import { degreeNumberToRoman } from '@whatnote/util/degree'

interface ChordProps {
  chord: string
  degree?: number
  active?: boolean
  onClick?: () => void
}

export const Chord = ({
  chord,
  degree,
  active = false,
  onClick
}: ChordProps) => {
  return (
    <div
      onClick={onClick}
      data-active={Boolean(active)}
      className='flex aspect-square w-full items-center justify-center rounded-lg bg-white text-sm font-bold text-black data-[active=true]:bg-[#FF3F25] data-[active=true]:text-white'
    >
      <span className='relative'>
        {degree && (
          <span
            data-active={Boolean(active)}
            className='absolute -left-3 -top-3 text-xs font-normal text-[#7F7F7F] data-[active=true]:text-white'
          >
            {degreeNumberToRoman(degree)}
          </span>
        )}
        {chord}
      </span>
    </div>
  )
}

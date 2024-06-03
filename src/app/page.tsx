'use client'
import { Chord } from '@whatnote/components/Chord'
import {
  chordFlatScale,
  chordNaturalScale,
  chordSharpScale
} from '@whatnote/types/Chord'
import { getHarmonicField } from '@whatnote/util/getHarmonicField'
import { getProgressions } from '@whatnote/util/getProgression'
import { useMemo, useState } from 'react'

export default function Home() {
  const [chordChanged, setChordChanged] = useState<string>('C')

  const chordMajor = useMemo(() => {
    const chords = {
      natural: chordNaturalScale,
      sharp: chordSharpScale.filter(
        (chord) => !chordNaturalScale.includes(chord)
      ),
      flat: chordFlatScale.filter((chord) => !chordNaturalScale.includes(chord))
    }
    return chords.natural.map((chord) => (
      <div
        key={chord}
        onClick={() => setChordChanged(chord)}
        data-active={Boolean(chord === chordChanged)}
        className='flex h-10 w-full items-center justify-center bg-white text-lg font-bold text-black data-[active=true]:bg-[#FF3F25] data-[active=true]:text-white'
      >
        {chord}
      </div>
    ))
  }, [chordChanged])

  const harmonicField = useMemo(() => {
    return (
      chordChanged &&
      getHarmonicField(chordChanged).map((chord, i) => (
        <Chord key={chord} chord={chord} degree={i + 1} />
      ))
    )
  }, [chordChanged])

  const progressions = useMemo(() => {
    if (chordChanged) {
      const harmonicField = getHarmonicField(chordChanged)
      return getProgressions(harmonicField).map((progression, i) => (
        <div
          className='relative grid w-full grid-cols-4 gap-1 border-b-2 py-5'
          key={`progression-${String(i)}`}
        >
          {progression?.map(({ chord, degree }, i) => (
            <Chord key={chord} chord={chord} degree={degree} />
          ))}
        </div>
      ))
    }
    return <></>
  }, [chordChanged])

  return (
    <>
      <div className='fixed left-0 top-0 z-10 grid w-full grid-cols-7 shadow-lg'>
        {chordMajor}
      </div>
      <div className='top-8 mt-14 flex flex-col gap-5 px-2'>
        {chordChanged && (
          <div className='flex w-full flex-col gap-2'>
            <h4>Campo Harmônico</h4>
            <div className='grid w-full grid-cols-4 gap-1 py-2'>
              {harmonicField}
            </div>
          </div>
        )}
        {chordChanged && (
          <div className='flex w-full flex-col gap-2'>
            <h4>Progressões</h4>
            {progressions}
          </div>
        )}
      </div>
    </>
  )
}

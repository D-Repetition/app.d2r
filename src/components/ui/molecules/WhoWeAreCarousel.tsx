import { navigationItemsData, slidesData } from '@/constants/homeSectionsData'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const AUTO_PLAY_DELAY = 7000
const TRANSITION_DURATION = 600

const WhoWeAreCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(
    Math.max(slidesData.findIndex((sd) => sd.active), 0)
  )
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goToIndex = (index: number): void => {
    setActiveIndex(index)
  }

  useEffect(() => {
    if (isPaused) return

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slidesData.length)
    }, AUTO_PLAY_DELAY)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, activeIndex])

  return (
    <div
      className='w-[60vw] min-h-[50vh] flex flex-col gap-[3vh]'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-full h-full overflow-hidden relative">
        <div
          className="flex h-full"
          style={{
            width: `${slidesData.length * 100}%`,
            transform: `translateX(-${activeIndex * (100 / slidesData.length)}%)`,
            transition: `transform ${TRANSITION_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          }}
        >
          {slidesData.map((sd) => (
            <div
              key={sd.id}
              className="h-full grid grid-cols-[2fr_1fr] gap-[5vh] px-[2px]"
              style={{ width: `${100 / slidesData.length}%` }}
            >
              <div className="border border-[0.5px] border-board-black/20 rounded-xl relative overflow-hidden">
                <Image src={sd.image} className='w-full h-full object-cover object-center' alt={sd.title} />
                <div className="absolute px-4 py-2 bg-white lg:text-[1.3vw] font-medium bottom-0 left-0 right-0 z-100">
                  {sd.title}
                </div>
              </div>
              <div
                className={[
                  "rounded-lg flex flex-col items-start justify-between px-4 py-5.25",
                  sd.backgroundColor,
                  sd.textColor,
                ].join(" ")}
              >
                <div>Statistiques</div>
                <div className="flex flex-col items-start justify-between gap-7 w-full">
                  {sd.statistics.map((st, i) => (
                    <div
                      key={i}
                      className={[
                        "w-full pb-2",
                        i < sd.statistics.length - 1 ? sd.dividerColor : "",
                      ].join(" ")}
                    >
                      <span className='lg:text-[2vw]'>{st.value}</span>&nbsp;
                      <span>{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 w-full">
        {navigationItemsData.map((nid, index) => (
          <button
            key={nid.id}
            type="button"
            onClick={() => goToIndex(index)}
            className={[
              "border-t border-t-2 pt-4 px-4 text-left cursor-pointer transition-colors duration-300",
              index === activeIndex ? "border-t-board-black" : "border-t-board-black/5",
            ].join(" ")}
          >
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="text-[12px]">{nid.title}</div>
              <div className='text-[14px]'>{nid.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default WhoWeAreCarousel
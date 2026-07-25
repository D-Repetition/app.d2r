import { Search } from '@/components/assets/icons'
import React, { ComponentProps } from 'react'

interface SearchFieldProps {
    value?: string
    placeholder?: string
    onChange?: (value: string) => void
    onSearch?: (value: string) => void
    className?: string
}

const SearchField = ({
    value,
    placeholder = 'Faites votre recherche',
    onChange,
    onSearch,
    className
}: SearchFieldProps) => {
    const [internalValue, setInternalValue] = React.useState<string>('')

    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = e.target.value
        if (!isControlled) setInternalValue(newValue)
        onChange?.(newValue)
    }

    const handleSearch = (): void => {
        onSearch?.(currentValue)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') handleSearch()
    }

    return (
        <div className={['relative w-[32vw] shrink-0 h-[6vh] border border-2 rounded-full border-board-black', className].join(" ")}>
            <input
                type="text"
                className='w-full h-full border-none outline-none px-5'
                placeholder={placeholder}
                value={currentValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button
                type="button"
                onClick={handleSearch}
                className='h-[4.5vh] w-[4.5vh] -translate-y-1/2 rounded-full flex items-center justify-center bg-board-black absolute right-1.5 top-1/2'
            >
                <Search className="fill-white opacity-100" />
            </button>
        </div>
    )
}

export default SearchField
import { useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color'

import s from './color-picker.module.scss'

const lightenColor = (color: string, percentage: number) => {
  const decimalPercentage = percentage / 100
  const num = parseInt(color.slice(1), 16)
  const r = (num >> 16) + Math.round(255 - (num >> 16)) * decimalPercentage
  const g = ((num >> 8) & 0x00ff) + Math.round(255 - ((num >> 8) & 0x00ff)) * decimalPercentage
  const b = (num & 0x0000ff) + Math.round(255 - (num & 0x0000ff)) * decimalPercentage

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

interface PropsI {
  color?: string
  onChangeColor?: (color: string, lightColor: string) => void
}
export const ColorPicker = (props: PropsI) => {
  const { color = '#ff0000', onChangeColor } = props

  const [selectedColor, setSelectedColor] = useState<string>(color)
  const [lightColor, setLightColor] = useState<string>('color')
  const [showPicker, setShowPicker] = useState(false)

  const handlerColorChange = (color: ColorResult) => {
    const colorSelect = color.hex

    setSelectedColor(colorSelect)
    setLightColor(lightenColor(colorSelect, 50))
    onChangeColor && onChangeColor(colorSelect, lightColor)
  }

  const toggleColorPicker = () => {
    setShowPicker(prev => !prev)
  }

  return (
    <div>
      <div className={s.colorBox} onClick={toggleColorPicker}>
        <div
          className={s.color_half}
          style={{
            backgroundColor: selectedColor,
          }}
        ></div>
        <div
          className={`${s.color_half} ${s.lighter}`}
          style={{
            backgroundColor: lightColor,
          }}
        ></div>
      </div>
      {showPicker && (
        <div className={s.picker_wrapper}>
          <ChromePicker color={selectedColor} onChangeComplete={handlerColorChange} />
        </div>
      )}
    </div>
  )
}

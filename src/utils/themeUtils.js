import { colord } from "colord"

function shiftToBabyBlue(hex) {
  const hsl = colord(hex).toHsl()
  const babyBlueHue = (hsl.h - 160 + 360) % 360
  return colord({ h: babyBlueHue, s: hsl.s, l: hsl.l }).toHex()
}

export function transformThemeToBlue() {
  document.querySelectorAll("*").forEach((el) => {
    const style = getComputedStyle(el)

    ;["color", "backgroundColor", "borderColor"].forEach((prop) => {
      const val = style[prop]

      if (val.includes("rgb")) {
        const rgb = val.match(/\d+/g)?.map(Number)
        if (!rgb || rgb.length < 3) return

        const hex = colord({ r: rgb[0], g: rgb[1], b: rgb[2] }).toHex()
        const hue = colord(hex).toHsl().h

        if (hue > 320 || hue < 20) {
          const newHex = shiftToBabyBlue(hex)
          el.style[prop] = newHex
        }
      }
    })
  })

  const styleTag = document.createElement("style")
  styleTag.innerHTML = `
    body::before {
      background: linear-gradient(
        -150deg,
        ${shiftToBabyBlue("#FFE1E0")} 0%,
        ${shiftToBabyBlue("#FFCCCB")} 80%
      ) !important;
    }

    .highlight-name,
    .highlight-pixels,
    .highlight-pixels::after {
      color: ${shiftToBabyBlue("#FF4D56")} !important;
      border-color: ${shiftToBabyBlue("#FF4D56")} !important;
    }

    .social-column img {
      filter: hue-rotate(-160deg) !important;
    }
  `
  document.head.appendChild(styleTag)
}

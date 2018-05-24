import ms from 'modularscale-js'

export const spacing = 8;

export const colours = {
    black : 'rgba(31,31,31,1)',
    midBlack : 'rgba(31,31,31,.75)',
    darkGrey : 'rgba(239,239,239,.25)',
    midGrey : 'rgba(255,255,255,.5)',
    lightGrey : 'rgba(239,239,239,1)',
}

function msSettings(value) {
  return ms(value, {
    base: [16],
    ratio: 1.25,
  })
}

const SystemFont =  "-apple-system-headline, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
export const typeStyles = {
    label1: {
        fontFamily:SystemFont,
        fontSize: `${msSettings(0)}px`,
        lineHeight: `${msSettings(1)}px`,
        letterSpacing: `0.05em`,
        fontWeight: 500
    },
    label2: {
        fontFamily:SystemFont,
        fontSize: `${msSettings(0)}px`,
        lineHeight: `${msSettings(1)}px`,
        letterSpacing: `0.05em`,
        fontWeight: 300
    },
    label3: {
        fontFamily:SystemFont,
        fontSize: `${msSettings(-0.5)}px`,
        lineHeight: `${msSettings(1)}px`,
        letterSpacing: `0.3em`,
        fontWeight: 300,
        textTransform : 'uppercase'
    },
    label4: {
        fontFamily:SystemFont,
        fontSize: `${msSettings(-0.5)}px`,
        lineHeight: `${msSettings(1)}px`,
        letterSpacing: `0.02em`,
        fontWeight: 500
    },
    label5: {
        fontFamily:SystemFont,
        fontSize: `${msSettings(-1)}px`,
        lineHeight: `${msSettings(1)}px`,
        letterSpacing: `0.04em`,
        fontWeight: 300
    },
    label6: {
        fontFamily:SystemFont,
        fontSize: `${msSettings(0)}px`,
        lineHeight: `${msSettings(1)}px`,
        fontStyle: 'italic',
        letterSpacing: `0.04em`,
        fontWeight: 300
    }
}

export const layout_marginTop = spacing * 7.5;
export const layout_marginLeft = spacing * 11;
export const layout_marginRight = spacing * 11;

//
//                         /----------\
//                        |            |    /-------\
//                        |  / top  \  |   |         |
//         /--- border ---+-| right  |-+---+- width -+---\
//        |                 | bottom |                    |
//        |                  \ left /                     |
//        |                                               |
//        |                              /----------\     |
//        |          /-------------\    |            |    |- END
//        |         |               |   |  / top  \  |    |
//        |         |  / margin  \  |   | | right  | |    |
//        |---------+-|           |-+---+-| bottom |-+----|
//        |            \ padding /         \ left /       |
// BEGIN -|                                               |
//        |                /---------\                    |
//        |               |           |                   |
//        |               |  / min \  |    / width  \     |
//         \--------------+-|       |-+---|          |---/
//                           \ max /       \ height /

const
    BORDER = 'border',
    TOP = 'top',
    BOTTOM = 'bottom',
    RIGHT = 'right',
    LEFT = 'left',
    WIDTH = 'width',
    MARGIN = 'margin',
    PADDING = 'padding',
    MIN = 'min',
    MAX = 'max',
    HEIGHT = 'height',
    autoPxProps = [
        BORDER + '-' + TOP + '-' + WIDTH,
        BORDER + '-' + RIGHT + '-' + WIDTH,
        BORDER + '-' + BOTTOM + '-' + WIDTH,
        BORDER + '-' + LEFT + '-' + WIDTH,
        MARGIN,
        PADDING,
        MARGIN + '-' + TOP,
        MARGIN + '-' + RIGHT,
        MARGIN + '-' + BOTTOM,
        MARGIN + '-' + LEFT,
        PADDING + '-' + TOP,
        PADDING + '-' + RIGHT,
        PADDING + '-' + BOTTOM,
        PADDING + '-' + LEFT,
        MIN + '-' + WIDTH,
        MIN + '-' + HEIGHT,
        MAX + '-' + WIDTH,
        MAX + '-' + HEIGHT,
        TOP,
        BOTTOM,
        LEFT,
        RIGHT
    ]

export default function isAutoPx(propKey: string) {
    return autoPxProps.indexOf(propKey) !== -1;
}

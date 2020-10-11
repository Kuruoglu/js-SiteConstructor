import {row, col, css} from './utils'

function title(block) {
    const {tag = 'h1', styles} = block.options
    return row(col(`<h1>${block.value}</h1>`), css(styles))
}
function text(block) {
    const {tag = 'p', styles, stylesP} = block.options
    return row(col(`<${tag} style="${css(stylesP)}">${block.value}</${tag}>`), css(styles))
}
function columns(block) {
    const {tag = 'div', styles} = block.options
    const html = block.value.map(item => col(item, css(styles))).join('');
    return row(html)
}
function image(block) {
    const {styles} = block.options
    return row(` <img src="${block.value}" style="${css(styles)}" />` )
}

export const templates = {
    title,
    text,
    columns,
    image
};
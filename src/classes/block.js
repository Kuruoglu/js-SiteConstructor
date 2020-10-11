import {col, css, row} from "../utils";

export class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML() {
        throw new Error('method thHTML should be implemented')
    }
}

export class TitleBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block{
    constructor(value, options) {
        super( value, options);
    }
    toHTML() {
        console.log(this.options)
        const {tag = 'p', styles, stylesP} = this.options;
        return row(col(`<${tag} style="${css(stylesP)}">${this.value}</${tag}>`), css(styles))
    }
}

export class ColumnBlock extends Block{
    constructor(value, options) {
        super( value, options);
    }
    toHTML() {
        const {tag = 'div', styles} = this.options
        const html = this.value.map(item => col(item, css(styles))).join('');
        return row(html)
    }
}

export class ImageBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {styles} = this.options
        return row(` <img src="${this.value}" style="${css(styles)}" />` )
    }
}
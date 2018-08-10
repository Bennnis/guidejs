export const setClasses = (el: any, classes: Array<string>) => {
    let classNames = ''

    classes.map((className: string) => {
        if (el.className.indexOf(className) === -1) classNames += className
    })

    el.className += classNames
}

export const setCsses = (el: any, styles: any) => {
    let css = el.style
    for (let s in styles) {
        css[s] = styles[s]
    }
}

export const createDom = (tagName: any) => {
    return document.createElement(tagName)
}

export const appendDom = (container: any, el: any) => {
    container.appendChild(el)
}

export const replaceFromTo = (sourceEl: any, targetEl: any) => {
    sourceEl.replaceWith(targetEl)
}
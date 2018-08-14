export const setClasses = (el:any, classes: Array<string>) => {
    let classNames = ''

    classes.map((className: string) => {
        if (!el.className.include(className)) className += className
    })

    el.className += classNames
}

export const createDom = (tagName: any) => {
    return document.createElement(tagName)
}

export const appendDom = (container: any, el: any) => {
    container.appendChild(el)
}
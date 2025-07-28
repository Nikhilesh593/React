const { Children } = require("react")

const reactElement={
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'click me to visit'
}

const mainContainer = document.querySelector("#root")
customRender
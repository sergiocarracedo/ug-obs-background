const files = require.context('.', true, /\.vue$/)

const ugComponents = {}

files.keys().forEach((key) => {
    ugComponents[key.replace(/(\.\/)/g, '')] = files(key)
})

export default ugComponents

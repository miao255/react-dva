const context = require.context("./models", false, /.js$/)

const getModel = context.keys().map(key => context(key))

export default function createModel(app) {
    return getModel.map(key => app.model(key.default))
}
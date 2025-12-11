const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('please reload the app')
    } catch (err) {
        errMsg = err.message
    } finally {
        // avoid returning from finally to prevent swallowing exceptions
    }
    return errMsg;
}

export default apiRequest
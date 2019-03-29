/**
 * 
 * @param {React.Component} component 
 * @param {Function} callBack 
 * @param {Number} delay 
 */
function debounce(component, callBack, delay = 1000) {
    if (component.state.timeout) clearTimeout(component.state.timeout);
    component.setState({
        timeout: setTimeout(callBack, delay)
    });
}

export default debounce;
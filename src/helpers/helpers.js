
const helpers = {
    toggleParams: {
        showRegister: false,
       
        },
    
    handleToggle(setToggle, key) {
        setToggle(
        toggle =>  toggle[key] === false 
        ? 
        {...toggle, [key]: true} 
        : 
        {...toggle, [key]: false});
    },
}
export default helpers;
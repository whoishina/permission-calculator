
/**
 * Expand your permission code to Hex list
 * 
 * @param {Array} Code Calculated permission code
 */
const getArrayPermission =  Code => 
        Code.toString(2)
        .toString()
        .split('')
        .reverse()
        .map( ( bin,index) => bin == 0 ? null : bin*2**index  )
        .filter( el => el !== null )
        .map( (val,index) => `0x${val.toString(16)}` )


/**
 * Check your code is that match requirements
 * 
 * @param {Object} PERMISSIONS Its a list of permission table
 * @param {Number} PERMISSION_CODE Calculated Permission code
 */
const isHasPermission = (PERMISSIONS, PERMISSION_CODE ) => {
    return  !Object.values(PERMISSIONS)
            .map( val => `0x${val.toString(16)}` )
            .some(
                val =>  getArrayPermission(PERMISSION_CODE)
                        .indexOf(val) === -1 ) 
}

const toHexArray = array => 
    Object.values(array).map( val => `0x${val.toString(16)}` )

const toDecCode = array =>
    array 

module.exports = {
    isHasPermission,
    getArrayPermission,
    toHexArray,
    toDecCode,
}
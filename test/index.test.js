const {isHasPermission, getArrayPermission, toHexArray } = require("../percal")

const PAGE_PERMISSIONS_REQUIRE = {

    ADMINISTRATION : 0x8,
    CREATE_POST : 0x10,
    CREATE_PAGE : 0x20,
    CREATE_USER : 0x40,
    CHANGE_PASSWORD: 0x80,
    GET_PASSWORD : 0x40000,

}


console.log('Danh sách quyền của người dùng ', getArrayPermission(2147483647))

console.log("Các quyền cần thiết ",toHexArray(PAGE_PERMISSIONS_REQUIRE) )

console.log('Có đù quyền hay không ?', isHasPermission(PAGE_PERMISSIONS_REQUIRE , 2147483647 ) )
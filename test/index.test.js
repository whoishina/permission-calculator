const {isHasPermission, getArrayPermission, toHexArray } = require("../percal")

const PAGE_PERMISSIONS_REQUIRE = {

    ADMINISTRATION : 0x80, 
    CREATE_POST : 0x10,
    CREATE_PAGE : 0x20,
    CREATE_USER : 0x40,

}

const USER_PERMISSION_CODE = 496

console.log('USER PERMISSION ARRAY ', getArrayPermission(USER_PERMISSION_CODE))

console.log("PAGE PERMISSION ARRAY", toHexArray(PAGE_PERMISSIONS_REQUIRE) )

console.log('ENGOUGH PERMISSION ?', isHasPermission(PAGE_PERMISSIONS_REQUIRE , USER_PERMISSION_CODE ) )
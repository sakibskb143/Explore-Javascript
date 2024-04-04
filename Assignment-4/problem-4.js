function password(obj) {

    const birthYearlength = String(obj.birthYear).length;

    const numberOfProperites = Object.keys(obj).length;

    if (numberOfProperites !== 3 || birthYearlength !== 4) {
        return "invalid";
    }

    const site_name = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const Newpassword = site_name + '#' + obj.name + '@' + obj.birthYear;
    return Newpassword;



}

const obj = { name: "toky", birthYear: 200, siteName: "Facebook" };
const getpassword = password(obj);
console.log(getpassword);







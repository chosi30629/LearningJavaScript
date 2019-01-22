// 맵
{
    const u1 = { name: 'Cynthia' };
    const u2 = { name: 'Jackson' };
    const u3 = { name: 'Olive' };
    const u4 = { name: 'James' };

    const userRoles = new Map();

    // userRoles.set(u1, "User");
    // userRoles.set(u2, "User");
    // userRoles.set(u3, "Admin");
    // 애석하지만 제임스에게 역할이 없음

    // 체인 가능
    userRoles
        .set(u1, "User")
        .set(u2, "User")
        .set(u3, "Admin");

    console.log(userRoles.get(u2));         // "User"
    console.log(userRoles.has(u1));         // true
    console.log(userRoles.get(u1));         // "User"
    console.log(userRoles.has(u4));         // false
    console.log(userRoles.get(u4));         // undefined

    console.log(userRoles.get(u1));         // "User"
    userRoles.set(u1, 'Admin');
    console.log(userRoles.get(u1));         // "Admin"
    console.log(userRoles.size);            // 3

    for (let u of userRoles.keys()) {
        console.log(u.name);
    }

    for (let r of userRoles.values()) {
        console.log(r);
    }

    for (let ur of userRoles.entries()) {
        console.log(ur);
        console.log(`${ur[0].name}: ${ur[1]}`);
    }

    // 맵도 분해할 수 있음
    // 분해하면 좀 더 자연스러운 코드가 됨
    for (let [u, r] of userRoles.entries()) {
        console.log(`${u.name}: ${r}`);
    }

    // entries() 메서드는 맵의 기본 이터레이터임
    // 위 코드는 다음과 같이 단축해서 쓸 수 있음
    for (let [u, r] of userRoles)
        console.log(`${u.name}: ${r}`);

    console.log(userRoles.values());
    console.log(...userRoles.values());
    console.log([...userRoles.values()]);

    userRoles.delete(u2);
    console.log(userRoles.size);

    userRoles.clear();
    console.log(userRoles.size);

}
{
    const u1 = { name: 'Cynthia' };
    const u2 = { name: 'Jackson' };
    const u3 = { name: 'Olive' };
    const u4 = { name: 'James' };

    const userRoles = new Map([
        [u1, 'User'],
        [u2, 'User'],
        [u3, 'Admin']
    ]);
}


// 위크맵
{
    const SecretHolder = (function () {
        const secrets = new WeakMap();
        return class {
            setSecret(secret) {
                secrets.set(this, secret);
            }
            getSecret() {
                return secrets.get(this);
            }
        };
    })();

    const a = new SecretHolder();
    const b = new SecretHolder();

    a.setSecret('secret A');
    b.setSecret('secret B');

    console.log(a.getSecret());
    console.log(b.getSecret());
}


// 셋
{
    const roles = new Set();
    console.log(roles.add("User"));          // Set ["User"]
    console.log(roles.add("Admin"));         // Set ["User, "Admin"]
    console.log(roles.size);                 // 2   
    console.log(roles.add("Admin"));         // Set ["User, "Admin"]
    console.log(roles.size);                 // 2   
    console.log(roles.delete("Admin"));      // true
    console.log(roles);                      // Set ["User"]
    console.log(roles.delete("Admin"));      // false
}


// 위크셋
{
    const naughty = new WeakSet();

    const children = [
        { name: "Suzy" },
        { name: "Derek" },
    ];

    naughty.add(children[1]);

    for (let child of children) {
        if (naughty.has(child))
            console.log(`Coal for ${child.name}!`);
        else
            console.log(`Presents for ${child.name}!`);
    }
}
//En este Libs creamos los roles por defecto
const Role = require('../models/Role.js');

module.exports = createRoles = async () => {
    try {
        const contador = await Role.estimatedDocumentCount();

        if (contador > 0) return;

        await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'admin' }).save(),
            new Role({ name: 'moderator' }).save()
        ]).then(values => console.log(values));
    } catch (error) {
        console.log(error);
    }
}
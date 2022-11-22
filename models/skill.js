const skills = [
    {id: 1, skill: 'Javascript'},
    {id: 2, skill: 'HTML'},
    {id: 3, skill: 'CSS'},
    {id: 4, skill: 'node.JS'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}
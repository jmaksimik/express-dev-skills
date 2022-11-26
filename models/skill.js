const skills = [
    {id: 1, skill: 'Javascript'},
    {id: 2, skill: 'HTML'},
    {id: 3, skill: 'CSS'},
    {id: 4, skill: 'node.JS'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteCurrent,
    updateCurrent
};

function updateCurrent(skill) {
   return skills.skill = skill;
};

function deleteCurrent(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function getAll() {
    return skills
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = skills.length + 1;
    skills.push(skill);
}
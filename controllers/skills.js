const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update
};

function update(req, res) {
    const skillFromDB = Skill.getOne(req.params.id);
    res.render('skills/update', {skill: skillFromDB});
    Skill.updateCurrent(req.params.skill);
    res.render('skills/${req.params.id}');
}

function deleteSkill(req, res) {
    Skill.deleteCurrent(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log('create controller function is firing');
    console.log(req.body, "<- contents of form");
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
}

function index(req, res, next) {
    const allSkills = Skill.getAll();
    res.render('skills/index', {skills: allSkills});
};

function show(req, res) {
    const skillFromDB = Skill.getOne(req.params.id);
    res.render('skills/show', {skill: skillFromDB});
};


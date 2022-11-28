const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit: showEdit,
    update: updateSkill
};

function updateSkill(req, res) {
    Skill.update(req.body, req.params.id);
    console.log(req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function showEdit(req, res) {
    const skillFromDB = Skill.getOne(req.params.id);
    res.render('skills/:id/edit', {skill: skillFromDB});
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


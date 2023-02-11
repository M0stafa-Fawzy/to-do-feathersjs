const { Service } = require('feathers-mongoose');

exports.ToDo = class ToDo extends Service {
    async create(data, params) {
        const { _id } = params.user
        const { name, description, time, finished } = data
        const todo = await super.Model.create({
            user: _id,
            name,
            description,
            time,
            finished
        })
        return todo
    }

    async get(data, params) {
        const { _id } = params.user
        const todo = await super.Model.findOne({ _id: data, user: _id })
        return todo
    }

    async find(data, params) {
        const { _id } = data.user
        const todos = await super.Model.find({ user: _id })
        return todos
    }

    async update(data, params) {
        const { name, description, time, finished } = data
        const { _id } = params.user

        const todo = await super.Model.findOneAndUpdate(
            { _id: data, user: _id },
            { name, description, time, finished },
            { new: true, runValidators: true }
        )
        return todo
    }

    async remove(data, params) {
        const { _id } = params.user
        const todo = await super.Model.findOneAndDelete({ _id: data, user: _id })
        return todo
    }


};

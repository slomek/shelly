"use strict";
function makeService(M) {
    let getAll = () => {
        return M.find().exec();
    };
    let getById = (id) => {
        return M.findById(id).exec();
    };
    let save = (mData) => {
        return M.findOneAndUpdate({_id: mData.id}, mData, {upsert:true});
    };
    let remove = (_id) => {
        return M.remove({_id});
    };

    return {
        getAll, getById, save, remove
    };
};

module.exports = {makeService};

const mongoose = require('mongoose');
const Article = require('../../models/article.model');
const { dateToString } = require('../../helpers/date');

const transformArticle = article => {
    return {
        ...article._doc,
        _id: article._doc._id.toString(),
        createdAt: dateToString(article._doc.createdAt),
        updatedAt: dateToString(article._doc.updatedAt),
    };
};


module.exports = {
    articles: async () => {
        try {
            let results = await Article.find();
            // console.log('results', results);
            return results.map(result => {
                return transformArticle(result);
            });

        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    article: async (args) => {
        try {
            const aid = mongoose.Types.ObjectId(args.articleInput._id);
            let article = await Article.findById(aid);
            return transformArticle(article);
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    createArticle: async (args) => {
        const article = new Article({
            title: args.articleInput.title,
            description: args.articleInput.description,
            body: args.articleInput.body
        });
        try {
            let result = await article.save();
            // console.log('result', result);
            return transformArticle(result);
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    editArticle: async (args) => {
        try {
            const aid = mongoose.Types.ObjectId(args.articleInput._id);
            let article = await Article.findById(aid);
            // console.log('article', article);
            article = Object.assign(article, args.articleInput);
            let result = await article.save();
            // console.log('result', result);
            return transformArticle(result);
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    deleteArticle: async (args) => {
        try {
            const aid = mongoose.Types.ObjectId(args.articleInput._id);
            let article = await Article.remove({ _id: aid });
            // console.log('article', article);
            return { ...article };
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
};

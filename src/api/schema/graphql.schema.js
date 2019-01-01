const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Article {
        _id: ID!
        title: String!
        description: String
        body: String!
        createdAt: String!
        updatedAt: String!
    }
    input ArticleCreateInput {
        title: String!
        description: String
        body: String!
    }    
    input ArticleEditInput {
        _id: ID!
        title: String
        description: String
        body: String
    }

    type ArticleDelete {
        n: Int
        ok: Int
    } 
    
    type RootQuery {
        articles: [Article!]!
        article(articleInput: ArticleEditInput): Article!
    }
    type RootMutation {
        createArticle(articleInput: ArticleCreateInput): Article
        editArticle(articleInput: ArticleEditInput): Article
        deleteArticle(articleInput: ArticleEditInput): ArticleDelete
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);


//   way to GET call graphql backend

// query {
//     articles{
//       _id,
//       title,
//       createdAt,
//     }
//   }



//   way to POST call graphql backend

// mutation {
//     createArticle(articleInput: { title:"title12", body:"body1" } ){
//         _id,
//         title
//     }
//     }
      
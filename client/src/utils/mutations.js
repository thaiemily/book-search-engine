import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login($email: String!, $password: String!) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser($username: String!, $email: String!, $password: String!) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const SAVE_BOOK = gql`
    mutation saveBook($bookId: String!) {
        saveBook(bookId: $bookId) {
            authors
            description
            title
            bookId
            image
            link
        }
    } 
`

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            authors
            description
            title
            bookId
            image
            link
        }
    } 
`
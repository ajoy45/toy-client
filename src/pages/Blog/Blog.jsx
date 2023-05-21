import React from 'react';
import UseTitle from '../../hooks/UseTitle';

const Blog = () => {
    UseTitle('blog')
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div>
                <h1>What is an access token and refresh token?How do they work and where should we store them on the client-side?</h1>
                <p><span className='text-2xl text-sky-600'>Access Token</span>:An access token is a credential that is issued to a client by an authentication server after successful authentication. It is a string or a token that contains information about the client's identity and permissions. The client includes the access token in subsequent requests to the server to access protected resources. The server verifies the access token to ensure the client has the necessary permissions to access the requested resource. Access tokens are usually short-lived and have an expiration time, after which they become invalid and need to be refreshed.</p>
                <p><span className='text-2xl text-sky-600'>Refresh Token</span>:A refresh token is also issued by the authentication server during the initial authentication process. Unlike access tokens, refresh tokens are long-lived and typically have a longer expiration time. When an access token expires, the client can use the refresh token to request a new access token without having to reauthenticate with the server. The server validates the refresh token and, if valid, issues a new access token to the client. This process is often referred to as token refreshing or token rotation. Refresh tokens are generally more secure than access tokens because they are not typically exposed to client-side code and are stored securely on the server.</p>
                <p><span className='text-2xl text-sky-600'>How it works</span>:when a user login with a server validate their credentials if success then given access token and reference token and  it will be stored in local storage or quiqes </p>
            </div>
            <div>
                <h1>Compare SQL and NoSQL databases?</h1>
                <p><span className='text-2xl text-sky-600'>SQl</span>:SQL databases are based on a structured data model known as the relational model. They use tables with predefined schemas to store data, and each table consists of rows and columns.</p>
                <p><span className='text-2xl text-sky-600'>NoSQ</span>: NoSQL databases use various data models, such as key-value, document, columnar, or graph-based, allowing for flexible data storage without predefined schemas.</p>
            </div>
            <div>
                <h1>What is express js? </h1>
                <p>Express is node js framework and runtime environment of javascript</p>
                <h1>What is Nest JS?</h1>
                <p> NestJS is a progressive, extensible, and opinionated Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and leverages modern JavaScript features,</p>
            </div>
            <div>
                <h1>What is MongoDB aggregate and how does it work? </h1>
                <p>The aggregate method in MongoDB follows the aggregation framework, which consists of stages that are applied sequentially to the data. Each stage performs a specific operation on the documents, and the output of one stage becomes the input for the next stage. Here's a general overview of how the aggregate methods:$match, $group, $project, $sort, $limit</p>
                
             </div>
          
        </div>
        
    );
};

export default Blog;
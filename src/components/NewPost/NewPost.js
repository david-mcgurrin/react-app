import React, {useState, useCallback} from "react";
import {Card, TextField, Button, Form, Layout, FormLayout} from '@shopify/polaris'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_POST = gql`
  mutation CreatePost($content: String!) {
    createMicropost(input : {postRequest: {content: $content, userId: 1}})
    {
      micropost {
        content,
        user {
          name
        }
      }
    }
  }
`;

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const handlePostTitleChange = useCallback((newPostTitle) => setPostTitle(newPostTitle), []);

  const [postContent, setPostContent] = useState("");
  const handlePostContentChange = useCallback((newPostContent) => setPostContent(newPostContent), []);

  const [postTags, setPostTags] = useState("");
  const handlePostTagsChange = useCallback((newPostTags) => setPostTags(newPostTags), []);

  const [addPost, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_POST);


  function handleFormSubmit(_event) {
    console.log(postTitle);
    console.log(postContent);
    console.log(postTags);

    addPost({ variables: { content: postContent } });
  }


  return (
    <Layout>
      <div className="main">
        <Card sectioned title="Add New Post">
          <Form onSubmit={handleFormSubmit}>
            <FormLayout>
              {mutationLoading && <p>Loading...</p>}
              {mutationError && <p>Error: Please try again</p>}
              <TextField 
                label="Post title"
                placeholder="Enter a title"
                helpText="Make it a good on!"
                value={postTitle}
                onChange={handlePostTitleChange}
              />

              <TextField 
                label="Post content"
                placeholder="Enter the content"
                helpText="Make it a good un!"
                multiline
                maxLength={240}
                showCharacterCount
                value={postContent}
                onChange={handlePostContentChange}
              />

              <TextField
                label="Tags"
                placeholder="#polaris"
                helpText="Enter the tags for your post, separated by comma."
                value={postTags}
                onChange={handlePostTagsChange}
              />

              <Button primary submit>Submit</Button>
            </FormLayout>
          </Form>
        </Card>
      </div>
    </Layout>
  )
};

export default NewPost;

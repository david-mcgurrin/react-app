import React, {useState, useCallback, useContext} from "react";
import {TextField, Button, Form, FormLayout} from '@shopify/polaris'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {AppContext} from '../../context/AppContext';

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

  // const {setPostContent, postContent} = props;
  const newPost = useContext(AppContext);

  const [postContent, setPostContent] = useState("");
  const handlePostContentChange = useCallback((newPostContent) => setPostContent(newPostContent), []);


  const [addPost, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_POST, {
    onCompleted: (data) => {
      newPost.updateFeed();
      setPostContent('');
    }
  });


  function handleFormSubmit(_event) {
    console.log(postContent);

    addPost({ variables: { content: postContent } });
  }

  

  return (
      <div className="new-post">
        {/* <button
          onClick={ac.toggleVisible}>
          Toggle Visible
        </button> */}
          <Form onSubmit={handleFormSubmit}>
            <FormLayout>
              {mutationLoading && <p>Loading...</p>}
              {mutationError && <p>Error: Please try again</p>}
              <TextField 
                label="Add a post"
                placeholder="Enter the content"
                helpText="Make it a good one!"
                multiline
                maxLength={240}
                showCharacterCount
                value={postContent}
                onChange={handlePostContentChange}
              />
              <Button primary submit>Submit</Button>
            </FormLayout>
          </Form>
      </div>
  )
};

export default NewPost;

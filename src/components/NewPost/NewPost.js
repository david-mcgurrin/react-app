import React, {useState, useCallback} from "react";
import {Card, TextField, Button, Form, Layout, FormLayout} from '@shopify/polaris'

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const handlePostTitleChange = useCallback((newPostTitle) => setPostTitle(newPostTitle), []);

  const [postContent, setPostContent] = useState("");
  const handlePostContentChange = useCallback((newPostContent) => setPostContent(newPostContent), []);

  const [postTags, setPostTags] = useState("");
  const handlePostTagsChange = useCallback((newPostTags) => setPostTags(newPostTags), []);


  function handleFormSubmit(_event) {
    console.log(postTitle);
    console.log(postContent);
    console.log(postTags);
  }


  return (
    <Layout>
      <div className="main">
        <Card sectioned title="Add New Post">
          <Form onSubmit={handleFormSubmit}>
            <FormLayout>
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

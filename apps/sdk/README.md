# InstaPost NodeJS SDK

This is the NodeJS SDK for [InstaPost](https://rjbusinesssolutions.org).

You can start by installing the package:

```bash
npm install @postiz/node
```

## Usage
```typescript
import InstaPost from '@postiz/node';
const instapost = new InstaPost('your api key', 'your self-hosted instance (optional)');
```

The available methods are:
- `post(posts: CreatePostDto)` - Schedule a post to InstaPost
- `postList(filters: GetPostsDto)` - Get a list of posts
- `upload(file: Buffer, extension: string)` - Upload a file to InstaPost
- `integrations()` - Get a list of connected channels
- `deletePost(id: string)` - Delete a post by ID

Alternatively you can use the SDK with curl, check the [InstaPost API documentation](https://rjbusinesssolutions.org) for more information.
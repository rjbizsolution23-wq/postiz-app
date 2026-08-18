# RJ Business Solutions NodeJS SDK

This is the NodeJS SDK for [RJ Business Solutions](https://rjbusinesssolutions.org).

You can start by installing the package:

```bash
npm install @postiz/node
```

## Usage
```typescript
import RJBusinessSolutions from '@postiz/node';
const client = new RJBusinessSolutions('your api key', 'your self-hosted instance (optional)');
```

The available methods are:
- `post(posts: CreatePostDto)` - Schedule a post with RJ Business Solutions
- `postList(filters: GetPostsDto)` - Get a list of posts
- `upload(file: Buffer, extension: string)` - Upload a file to RJ Business Solutions
- `integrations()` - Get a list of connected channels
- `deletePost(id: string)` - Delete a post by ID

Alternatively you can use the SDK with curl, check the [RJ Business Solutions API documentation](https://rjbusinesssolutions.org) for more information.

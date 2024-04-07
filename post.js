const inputtedParameters = process.argv.slice(2, 4)

const posts = [
  {
    name: 'post1',
    author: 'author1',
  },
  {
    name: 'post2',
    author: 'author2',
  },
  {
    name: 'post3',
    author: 'author3',
  },
]

listPost = () => {
  posts.forEach((post) => {
    console.log(post.name)
  })
}

addPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    if (newPost) {
      posts.push(newPost)
      resolve(posts)
    } else {
      reject('Post not Added')
    }
  })
  return promise
}

async function getPostList(name, author) {
  try {
    await addPost({ name: name, author: author })
    listPost()
  } catch (error) {
    console.log(error)
  }
}

getPostList(String(inputtedParameters[0]), String(inputtedParameters[1]))

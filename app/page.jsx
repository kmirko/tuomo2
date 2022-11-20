import AppDescription from "./app-description";
import LoginApp from "./login_app";

// export async function getPosts(){
//   const res = await fetch('http://localhost:3000/api/posts')
//   return res.json()
// }

export default async function Home() {
  // const posts = await getPosts()
  console.log('serve 1')
  return (
    <div>
      
     <LoginApp>
        <AppDescription/>
     </LoginApp>
     {/* {posts.map(post=>(
      <h3 key={post.id}>{post.name}</h3>
     ))} */}
    </div>
  )
}

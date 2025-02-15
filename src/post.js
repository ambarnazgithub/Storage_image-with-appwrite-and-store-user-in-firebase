const { Client, Storage, ID } = Appwrite;
//  download image
import { set, ref, database,push ,onChildAdded} from "./config.js";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67a6f6c0003c556be8e1");

const storage = new Storage(client);

const addPost = () => {
  const content = document.getElementById("content").value;
  const imageFile = document.getElementById("imageFile").files[0];
  
  if (!imageFile) {
    alert("Please select an image file before uploading.");
    return;}
  const promise = storage.createFile(
    "67a6fd42002b22339a99",
    ID.unique(),
    imageFile
  );

  promise.then(
    function (response) {
      console.log(response);
      alert("Image uploaded successfully! View it in console.");
      
      const result = storage.getFileDownload(
        "67a6fd42002b22339a99",
        response.$id
      );
      //  console.log(result);
       const postref = ref(database, `post/`);
      const uniqueId = push(postref)
      set(uniqueId, { content, url: result }).then((value) => {
        alert("post added to database");
      });
    },
    function (error) {
      console.error(error);
      alert("Upload failed. Check console for details.");
    }
  );
};
 let postArr = []

const getPost =()=>{
  const postref = ref(database, `post/`);
  onChildAdded ( postref , (snapshot)=>{
    const data =  snapshot.val()
  postArr.push(data)
  console.log (postArr)
  const postContainer = document.getElementById("posts")
  postArr.forEach((item,i)=>{
    let html = `<div id="posts"  >
    <h3>Recent Posts</h3>
    <img width="100" height = "100"
    src= ${item.url}
    alt = "">
    <p> ${item.content}</p>

</div>`
postContainer.innerHTML+= html;
  })
  })
}
getPost()

const button = document.getElementById("post-btn")
document.getElementById("post-btn").addEventListener("click", addPost);


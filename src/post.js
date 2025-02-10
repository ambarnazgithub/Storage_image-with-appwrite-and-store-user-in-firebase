 const { Client, Storage, ID } = Appwrite;

 const client = new Client()
   .setEndpoint("https://cloud.appwrite.io/v1")
   .setProject("67a6f6c0003c556be8e1");

 const storage = new Storage(client);

 const addPost = () => {
   const content = document.getElementById("content").value;
   const imageFile = document.getElementById("imageFile").files[0];

   const promise = storage.createFile(
     "67a6fd42002b22339a99",
     ID.unique(),
     imageFile
   );

   promise.then(
     function (response) {
         console.log(response);
         alert("Image uploaded successfully! View it in console.");
     },
     function (error) {
         console.error(error);
         alert("Upload failed. Check console for details.");
     }
 )
 }
 const uploadImage = ()=>{

 }


 document.getElementById("post-btn").addEventListener("click", addPost);




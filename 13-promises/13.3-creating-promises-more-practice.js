function download(url) {
  console.log(`Start downloading video from ${url} ...`); //sync
  let fileName; //sync
  return new Promise((resolve, reject)=>{
    if(url.length === 0){
      return reject("Url was not valid.")
    }
    setTimeout(() => { //async
        fileName = url.split("/").pop(); //["https:","www.thinkful.com",  "sync-and-async.mov"]
        console.log(`Video downloaded from ${url} to ${fileName}.`);
        return resolve(fileName)
    }, 2000);
  })
}

function process(videoFile) {
  console.log(`Start processing ${videoFile} ...`);

  setTimeout(() => {
      console.log(`Video processing complete: ${videoFile}.`);
  }, 4000);
}

const url = "https://www.thinkful.com/sync-and-async.mov"; //["https:","www.thinkful.com",  "sync-and-async.mov"]

download("")
  .then((resolvedFileName)=>{ //.then is to handle resolved promises
    console.log("filename is this", resolvedFileName)
    process(resolvedFileName);
  })
  .catch((err)=>{
    console.log(err)
  })

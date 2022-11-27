var url=" https://63771c6881a568fc250c2c70.mockapi.io/mockapi1"
async function CreateData(){
    let data={
        "name":"dheeraj",
        " email":"vsdheeraj17@gmail.com",

    }
    let res=await fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
       
    })
    let result=await res.json()
    console.log(result)
}
CreateData()

async function deletedata(){
    let res=await fetch(url+"\10",{
        method:"Delete",
    })
    var result=await res.json()
    console.log(result);
}
deletedata()
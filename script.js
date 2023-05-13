let url1="https://dummyjson.com/posts";
let url2="https://dummyjson.com/products";
let url3="https://dummyjson.com/todos";

const button1=document.getElementById("btn-1");

function PromiseAPI1() {
    return new Promise(resolve => {
      setTimeout(() => {
        fetch(url1)
          .then(response => response.json())
          .then(data => {

            const resultDiv=document.getElementById('table-container1');
            let tableData =" "
            data.posts.map((val)=>{
                tableData =tableData+`
                <tr>
                <td>${val.id}</td>
                <td>${val.title}</td>
                <td>${val.body}</td>
                </tr>
                `

                // let tr=document.createElement('tr');
                // let td1=document.createElement('td');
                // td1.innerHTML=el.id;
                // let td2=document.createElement('td');
                // td2.innerHTML=el.title;
                // let td3=document.createElement('td');

                //  td3=innerHTML=el.body;
                //  resultDiv.append(tr,td1,td2,td3);
    

            })
            resultDiv.innerHTML=tableData;
           
           console.log(data);
            resolve(true);
          })
          .catch(error => {
            console.error('Error:', error);
            resolve(false);
          });
      }, 1000);
    });
  }
  function PromiseAPI2() {
    return new Promise(resolve => {
      setTimeout(() => {
        fetch(url2)
          .then(response => response.json())
          .then(data => {
            const resultDiv=document.getElementById('table-container2');
            let tableData="";
            data.products.map((val)=>{
                tableData += ` <tr> 
                  <td>${val.id}</td>
                  <td>${val.title}</td>
                  <td>${val.description}</td>
                  <td><img style="width: 150px" src="${val.thumbnail}"/></td>
                  </tr>
            
                `

            })
            resultDiv.innerHTML=tableData;

        
            
           console.log(data)
           console.log("clicked")
           resolve(true);
          })
          .catch(error => {
            console.error('Error:', error);
            resolve(false);
          });
      }, 2000);
    });
    
  }
  function PromiseAPI3(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            fetch(url3)
            .then(response=>response.json())
            .then(data=>{
                const resultDiv=document.getElementById('table-container3');
                let tabledata=""
                data.todos.map((val)=>{
                    tabledata =tabledata + `<tr>
                    <td>${val.id}</td> 
                    <td>${val.todo}</td> 
                    <td>${val.completed}</td> 
                    <td>${val.userId}</td> 
                    </tr>
                    `
                })
                resultDiv.innerHTML=tabledata;

                console.log(data);
                resolve(true);
            }).catch(error=>{
                console.error('Error:', error);
                resolve(false);
            })
        },3000);
    });
 
  }

  
async function startPromiseChain() {
   try{
    await PromiseAPI1();
    await PromiseAPI2();
    await PromiseAPI3();
   }
  
  catch{
console.error(error);
  }
}
  
  
button1.addEventListener('click', startPromiseChain);
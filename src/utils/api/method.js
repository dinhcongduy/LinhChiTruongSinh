export async function UPLOADFILE(url, formdata) {       
  //const token = await localStorage.getItem('token')
  const token = await sessionStorage.getItem('token');
  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNjA4MjIxNDM2LCJleHAiOjE2MDg4MjYyMzZ9.cuTFQDlSpr9A9mivXQ_SCFli18YnKmZ52OHB6N2U2S4"
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer "+token);
  myHeaders.append("Content-Type", "application/json");  
    
  let requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization:"Bearer "+token   
    },
    body: formdata, 
  };
  try {   
    let res= await fetch(url, requestOptions);      
    res = await res.json();
    console.log("MMM1:", res);
    // alert("Ghi dữ liệu thành công! ")
    return res;
  } catch (e) {        
    alert("Xin hãy kiểm tra kết nối internet, "+e +" from api.tsx");
  }
}

//POST using fetch
export async function POST(url, JSONbody) {       
  const token = await sessionStorage.getItem('token');
  //const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2IiwiaWF0IjoxNjA3NjEyNTk4LCJleHAiOjE2MDgyMTczOTh9.c3esIsXFx1pLFOCh9QDGYLlfx5MsSFSm72iqVysGao8"
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer "+token);
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify(JSONbody);      
  let requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization:"Bearer "+token   
    },
    body: raw, 
  };

  try {   
    let res= await fetch(url, requestOptions);      
    res = await res.json();
    console.log("từ api.tsx : ", res);
    // alert("Ghi dữ liệu thành công! ")
    return res;
  } catch (e) {        
    alert("Xin hãy kiểm tra kết nối internet, "+e +" from api.tsx");
  }
}

//GET using fetch
export async function GET(url) {
  //const token = await sessionStorage.getItem('token');
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjEyNDg2MDk2LCJleHAiOjE2MTMwOTA4OTZ9.ZagjtKG0XBxf_VBcgUQvOg2-39dUePnTrLpIVa8Pi2c";
  let requestOptions = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization:"Bearer "+token},     
  };
  try {
    let result=[];   
    let res= await fetch(url, requestOptions);
    res = await res.json();
    return res;
  } catch (e) {
    alert("Xin hãy kiểm tra kết nối internet, "+e +" from api.tsx");
  }     
}

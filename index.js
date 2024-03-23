// returns true or false
// html String

let reqHtml='<div><div></div><p></h1></div>'

function validHTML(str)
{
  let arr=[]
  let sub=""
  let close=""
  if(str.charAt(0)!='<')
  return false;
  for(let i=0;i<str.length;i++)//
  {
    if(close.length==0)
    {
    if(str.charAt(i)=='<'&&str.charAt(i+1)!='/')
    sub+=str.charAt(i);
    else if(sub.length>0)
    sub+=str.charAt(i);
    if(str.charAt(i)=='>')
    {
      console.log("Sub ",sub);
      if(sub.charAt(0)=='<')
      {
        arr.push(sub);
      }
      else
      return false;
      sub="";
    }
    }
    if(str.charAt(i)=='/'&&str.charAt(i-1)=='<')
    {
      close+=str.charAt(i-1);
    }
    // console.log("Close ",close)
    if(close.length>0)
    {
      close+=str.charAt(i);
      if(str.charAt(i)=='>')
      {
        console.log("here ",arr[arr.length-1])
        let check1=arr[arr.length-1].substring(1,arr[arr.length-1].length-1);
        let check2=close.substring(2,close.length-1);
        console.log("Close ",close)
        console.log("Check 1",check1)
        console.log("Check 2",check2)
        if(check1==check2)
        arr.splice(arr.length-1,1);
        else
        return false;
        close="";
      }
    }
    
  }
  
  return arr.length>0?false:true;
}

console.log(validHTML(reqHtml))

// a
// div
// div
// a

// resultant array

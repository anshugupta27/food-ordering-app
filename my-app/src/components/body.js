// react -> 1 functional(hooks) 2. class component (lifecycle method)

//phase 1 -> variables -> undefined 
//
function BodyComp(data) {
    const value = data ? data.children : "empty data";
    // console.log("data", data)
  return (
    <>
      <div>This is body and children is {value} </div>
    </>
  );
}
export function BodyComp1() { //named export
    return (
      <>
        <div>This is body component 1</div>
      </>
    );
  }

  export function BodyComp2() { //named export 
    return (
      <>
        <div>This is body component 2</div>
      </>
    );
  }

export default BodyComp; //only one function can be returned as default

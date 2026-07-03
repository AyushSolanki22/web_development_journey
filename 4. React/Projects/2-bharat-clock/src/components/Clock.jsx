//copied clock object....///**** */

function Clock() {
  let time=new Date();

  return (
    <div className="text lead">
      This is the current time:{" "}
      {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
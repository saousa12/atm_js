import "./App.css";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false); //popup
  const [calc, setCalc] = useState(""); //input
  const [result, setResult] = useState({
    //result
    result: 1000000,
  });
  //save input
  const updated = (value) => {
    setCalc(calc + value);
  };

  //reset
  const reset = () => {
    setCalc("");
  };

  //open popup,calculate
  const handleClickOpen = () => {
    if (calc > result.result) {
      setOpen(true);
    } else if (calc === "") {
      setOpen(true);
    } else if (calc == 0) {
      setOpen(true);
    } else {
      setResult({ result: result.result - calc });
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  //create button
  const createDigit = () => {
    const digit = [];
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button key={i} onClick={() => updated(i.toString())}>
          {i}
        </button>
      );
    }
    return digit;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className="center">ATM</h1>
        </div>
      </header>
      <body>
        <div className="information">
          <h3>
            เลขบัญชี <span style={{ marginLeft: "120px" }}> 12345xx678 </span>
          </h3>
          <h3>
            จำนวนเงิน{" "}
            <span style={{ marginLeft: "100px" }}>
              {" "}
              {result.result.toLocaleString()} บาท{" "}
            </span>
          </h3>
          <div>กรอกยอดเงิน</div>
          <p>{calc || "0"}</p>
        </div>
        <div className="popup">
          <dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {/* var variable = (condition) ? (true block) : ((condition2) ? (true block2) : (else block2)) */}
            {calc > result.result ? (
              <dialogTitle id="alert-dialog-title">
                {"ยอดเงินของคุณไม่เพียงพอ"}
              </dialogTitle>
            ) : calc == "" || calc == 0 ? (
              <dialogTitle id="alert-dialog-title">
                {"กรุณากรอกยอดเงินจ้า"}
              </dialogTitle>
            ) : (
              <dialogTitle id="alert-dialog-title">
                {"รอรับเงินได้เลยจ้า"}
              </dialogTitle>
            )}

            <dialogActions>
              <br />
              <button id="ok" onClick={handleClose} autoFocus>
                OK
              </button>
            </dialogActions>
          </dialog>
        </div>
        <div className="digits">
          {createDigit()}

          <button onClick={() => updated("0")}>0</button>
          <button onClick={handleClickOpen} id="submit">
            submit
          </button>
          <button onClick={reset} id="cancel">
            cancel
          </button>
        </div>
      </body>
    </div>
  );
}

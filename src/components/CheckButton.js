import React, { useState } from 'react';
import { Checkmark } from 'react-ionicons';

const CheckButton = ({ text, green, outline }) => {

  const [otherInput, setOtherInput] = useState(false)

  return (
    <>

      {green ? (
        <>
          {outline ?
            <>
              <button
                type="button"
                onClick={() => setOtherInput(!otherInput)}
                className={`${otherInput === true
                  ? "bg-white border border-coolDarkerGreen"
                  : "border border-coolDarkerGreen"
                  } rounded-md`}
              >
                <Checkmark color="white" />
              </button>
              <p className="ml-3 text-sm">{text}</p>
            </> :
            <>
              <button
                type="button"
                onClick={() => setOtherInput(!otherInput)}
                className={`${otherInput === true
                  ? "bg-coolDarkerGreen border border-white"
                  : "border border-coolDarkerGreen"
                  } rounded-md`}
              >
                <Checkmark color="white" />
              </button>
              <p className="ml-3 text-sm">{text}</p>
            </>}
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setOtherInput(!otherInput)}
            className={`${otherInput === true
              ? "bg-coolOrange border border-white"
              : "border border-coolOrange"
              } rounded-md`}
          >
            <Checkmark color="white" />
          </button>
          <p className="ml-3 text-sm">{text}</p>
        </>
      )}
    </>
  );
}

export default CheckButton;

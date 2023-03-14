import React from 'react';

export function TextInfo(text) {
  return <span className="value_tiny_textvalue text-dark m-0">**{text}</span>;
}

export function ModifyButton(setcitadel, textAction = 'Modifier', rest) {
  return (
    <div
      onClick={() => {
        setcitadel();
      }}
      className="btn btn-primary text-light fw-bold modify_absoluter text-nowrap"
      {...rest}>
      {textAction}
    </div>
  );
}

export function BSvg(icon = 'edit') {
  switch (icon) {
    case 'bot':
      return (
        <i
          className="material-icons type1 for-closed active"
          style={{ color: ' rgb(255, 255, 255)' }}>
          <svg
            id="ic_bubble"
            fill="#FFFFFF"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </i>
      );

    default:
      return (
        <i style={{ height: 16, width: 16 }}>
          <svg
            id="ic_create"
            fill="#96000f"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </i>
      );
  }
}

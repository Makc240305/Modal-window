
export default function Modal({open, setOpen}) {
  return (
    <div className={`overlay animated ${open ? "show" : ""}`}>
      <div className="modal">
        <svg
          onClick={() => {
            setOpen(false);
          }}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamUxZmR0ZXFwaHQzNnlncm04a2dyN255Mm9yN3g3ZWpjYTJtdTFmbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnAiaMCws8nOsE/giphy.gif" />
      </div>
      <div className="closure" onClick={() => {setOpen(false)}} />
    </div>
  );
}

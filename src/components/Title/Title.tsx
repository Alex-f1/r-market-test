import "./Title.scss";

type propsTitleType = {
  text: string
}

function Title({ text }: propsTitleType) {
  return (
    <div className="title text-center">
      <h2 className="text-5xl font-semibold mb-12">{text}</h2>
    </div>
  );
}

export default Title;
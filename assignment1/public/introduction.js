const element = React.createElement("div", {
  id: "main_div"
}, React.createElement("div", {
  id: "name_div"
}, React.createElement("h1", null, "Siddhant Vijay Kajale")), React.createElement("div", {
  id: "image_div"
}, React.createElement("img", {
  id: "image_ID",
  src: "introduction_image.jpeg",
  alt: "My Photo",
  width: "320",
  height: "320"
}), React.createElement("br", null), React.createElement("br", null)), React.createElement("div", {
  id: "introduction_div"
}, "A person who is fascinated by technology, yes that's me. ", React.createElement("br", null), "I am a student at SDSU doing my graduation in Computer Science. ", React.createElement("br", null), "On my way to become a full stack developer. ", React.createElement("br", null), "I am always passionate about learning new technologies. ", React.createElement("br", null), "Talking about my hobbies, I like to play cricket and football. ", React.createElement("br", null), "This pretty much sums up about me. ", React.createElement("br", null), React.createElement("br", null)), React.createElement("div", {
  id: "git_div"
}, React.createElement("a", {
  id: "git_ID",
  href: "https://github.com/Sid1010/"
}, "VIEW MY GITHUB")));
ReactDOM.render(element, document.getElementById('sectionA'));
const element = (
    <div id="main_div">
        <div id="name_div">
            <h1>Siddhant Vijay Kajale</h1>
        </div>
        <div id="image_div">
            <img id="image_ID" src="introduction_image.jpeg" alt="My Photo" width="320" height="320"></img><br/><br/>
        </div>
        <div id="introduction_div">
            A person who is fascinated by technology, yes that's me. <br/>
            I am a student at SDSU doing my graduation in Computer Science. <br/>
            On my way to become a full stack developer. <br/>
            I am always passionate about learning new technologies. <br/>
            Talking about my hobbies, I like to play cricket and football. <br/>
            This pretty much sums up about me. <br/><br/>
        </div>
        <div id="git_div">
            <a id="git_ID" href="https://github.com/deshpandeshubham">VIEW MY GITHUB</a>
        </div>
    </div>
)
   
ReactDOM.render(element, document.getElementById('sectionA'));
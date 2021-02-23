const Article = props => {
    return ( 
        <div>
            {props.message_status?props.messages:null}{props.message_status?<span className="spanik">|</span>:null}
        </div>
     );
}
 
export default Article;

import './styles.css'

function Body(props){

    var names=props.list;

    var nameslist=names.map(name => <li>name:{name.name}<br/>age:{name.age}</li>);
    return <ol>
            {nameslist}
           </ol>
}
Body.defaultProps={
    list:[{
    name:"Unknown",
    age:null
}]
}
export default Body;